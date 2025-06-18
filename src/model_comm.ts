import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Summarizes the input text using ChatGPT.
 * @param text Text to summarize
 * @returns Summary text
 */
export async function summarizeText(text: string): Promise<string> {
  if (!text) {
    throw new Error('Input text is empty');
  }

  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'user', content: process.env.OPENAI_SYSTEM_PROMPT as string},
      ],
    });

    const summary = response.choices[0]?.message?.content?.trim();
    if (!summary) {
      throw new Error('No summary received');
    }

    return summary;
  } catch (error) {
    console.error('OpenAI API error:', error);
    
    if (error instanceof OpenAI.APIError) {
      throw new Error(`OpenAI API Error: ${error.message}`);
    } else if (error instanceof OpenAI.APIConnectionError) {
      throw new Error('Failed to connect to OpenAI API');
    } else if (error instanceof OpenAI.RateLimitError) {
      throw new Error('OpenAI API rate limit exceeded');
    } else {
      throw error;
    }
  }
}
