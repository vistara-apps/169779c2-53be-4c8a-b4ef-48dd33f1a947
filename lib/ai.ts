import OpenAI from 'openai';
import { generatePetPrompt } from './utils';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export async function generatePetImage(traits: string[]): Promise<string> {
  try {
    const prompt = generatePetPrompt(traits);

    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '512x512',
      quality: 'standard',
    });

    const imageUrl = response.data?.[0]?.url;
    if (!imageUrl) {
      throw new Error('No image URL returned from API');
    }

    return imageUrl;
  } catch (error) {
    console.error('Error generating pet image:', error);
    throw new Error('Failed to generate pet image');
  }
}

export async function generatePetBackstory(name: string, traits: string[]): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a creative writer specializing in virtual pet backstories. Create engaging, family-friendly backstories for AI pets.',
        },
        {
          role: 'user',
          content: `Create a short, engaging backstory for a virtual pet named "${name}" with these traits: ${traits.join(', ')}. Keep it under 100 words and make it suitable for all ages.`,
        },
      ],
      max_tokens: 150,
      temperature: 0.8,
    });

    return completion.choices[0]?.message?.content || 'A mysterious pet with an unknown past.';
  } catch (error) {
    console.error('Error generating pet backstory:', error);
    return `${name} is a wonderful companion with ${traits.join(', ').toLowerCase()} traits, ready for adventures in the digital realm.`;
  }
}
