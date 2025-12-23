#!/usr/bin/env node

// Test script for Lead Score Predictor
// Run with: node test-lead-score.js

const testData = {
  website_url: 'https://maruonline.co.za',
  company_name: 'Maru Online',
  industry: 'technology',
  company_size: 'smb',
  email: 'test@example.com'
};

async function testLeadScorePredictor() {
  try {
    console.log('🧪 Testing Lead Score Predictor...');
    console.log('📊 Test Data:', testData);
    
    const response = await fetch('http://localhost:3000/api/assessments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        app_type: 'lead_score',
        email: testData.email,
        input_data: testData,
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Test PASSED!');
      console.log('📈 Score:', result.data.score);
      console.log('🎯 Factors:', result.data.factors);
      console.log('💡 Recommendations:', result.data.recommendations.length, 'items');
    } else {
      console.log('❌ Test FAILED:', result.error);
    }
    
  } catch (error) {
    console.log('❌ Test ERROR:', error.message);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testLeadScorePredictor();
}

module.exports = { testLeadScorePredictor };