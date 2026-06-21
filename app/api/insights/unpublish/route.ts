import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { writeClient } from '@/sanity/lib/writeClient'
import { verifyUnpublish } from '@/lib/insights/unpublishToken'

export const dynamic = 'force-dynamic'

// One-click "take it down" from the notification email. Removes publishedAt, so
// the post immediately drops off the live site (Insights queries require it),
// while the document is preserved in Sanity for review/re-publish.
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const token = searchParams.get('token')

  if (!id || !token || !verifyUnpublish(id, token)) {
    return new NextResponse('Invalid or expired unpublish link.', { status: 401 })
  }
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return new NextResponse('Server not configured for writes.', { status: 500 })
  }

  try {
    await writeClient.patch(id).unset(['publishedAt']).commit()
    revalidatePath('/insights')
    // id is "insight-<slug>" — refresh the specific article path too.
    const slug = id.replace(/^insight-/, '')
    if (slug) revalidatePath(`/insights/${slug}`)
  } catch (err) {
    console.error('unpublish failed:', err)
    return new NextResponse('Could not unpublish — it may already be down.', { status: 500 })
  }

  return new NextResponse(
    `<!doctype html><meta charset="utf-8"><title>Unpublished</title>
     <div style="font-family:Inter,Arial,sans-serif;max-width:520px;margin:64px auto;padding:0 24px;color:#0D1B2A;">
       <h1 style="color:#1A3A5C;font-size:24px;">Article unpublished</h1>
       <p style="color:#4A5568;line-height:1.7;">It has been removed from the live Insights section. The draft is preserved in Sanity Studio if you want to edit and re-publish it.</p>
       <p><a href="https://www.sanity.io/manage" style="color:#3DB8C6;">Open Studio →</a></p>
     </div>`,
    { status: 200, headers: { 'content-type': 'text/html; charset=utf-8' } },
  )
}
