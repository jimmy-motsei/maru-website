import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest, validateSession } from '@/lib/auth';
import { logger, securityMonitor, performanceMonitor } from '@/lib/monitoring';

export async function GET(request: NextRequest) {
  // Check authentication
  const session = getSessionFromRequest(request);
  if (!session || !validateSession(session)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'overview';

    switch (type) {
      case 'overview':
        return NextResponse.json({
          logs: logger.getStats(),
          security: {
            blockedIPs: securityMonitor.getBlockedIPs().length,
            suspiciousIPs: securityMonitor.getSuspiciousIPs().length,
            recentBlocked: securityMonitor.getBlockedIPs().slice(0, 5),
          },
          performance: {
            slowEndpoints: performanceMonitor.getSlowEndpoints(2000).slice(0, 5),
            allMetrics: performanceMonitor.getAllMetrics(),
          },
        });

      case 'logs':
        const level = searchParams.get('level') as 'info' | 'warn' | 'error' | undefined;
        const limit = parseInt(searchParams.get('limit') || '50');
        return NextResponse.json({
          logs: logger.getLogs(level, limit),
        });

      case 'security':
        return NextResponse.json({
          blockedIPs: securityMonitor.getBlockedIPs(),
          suspiciousIPs: securityMonitor.getSuspiciousIPs(),
        });

      case 'performance':
        return NextResponse.json({
          metrics: performanceMonitor.getAllMetrics(),
          slowEndpoints: performanceMonitor.getSlowEndpoints(),
        });

      default:
        return NextResponse.json(
          { error: 'Invalid monitoring type' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Monitoring API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch monitoring data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Check authentication
  const session = getSessionFromRequest(request);
  if (!session || !validateSession(session)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action, ip } = body;

    if (action === 'unblock' && ip) {
      securityMonitor.unblockIP(ip);
      return NextResponse.json({ success: true, message: 'IP unblocked' });
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Monitoring action error:', error);
    return NextResponse.json(
      { error: 'Action failed' },
      { status: 500 }
    );
  }
}