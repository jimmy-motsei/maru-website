import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.GOOGLE_AI_API_KEY) {
  throw new Error('GOOGLE_AI_API_KEY environment variable is required');
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

export async function generateAIResponse(prompt: string, systemPrompt?: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const fullPrompt = systemPrompt 
      ? `${systemPrompt}\n\nUser Request: ${prompt}`
      : prompt;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini AI error:', error);
    throw new Error('AI processing failed');
  }
}

export async function generateStructuredResponse<T>(
  prompt: string,
  systemPrompt: string,
  schema: any
): Promise<T> {
  try {
    const response = await generateAIResponse(prompt, systemPrompt);
    
    // Try to parse JSON response
    try {
      return JSON.parse(response) as T;
    } catch (parseError) {
      // If JSON parsing fails, extract JSON from response
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]) as T;
      }
      throw new Error('Invalid JSON response from AI');
    }
  } catch (error) {
    console.error('Structured AI response error:', error);
    throw error;
  }
}