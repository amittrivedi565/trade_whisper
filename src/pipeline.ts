import { setupUnixSocketServer } from './unix_socket';
import { summarizeText } from './model_comm';

/**
 * Starts the Unix socket server and sends incoming text to summarizeText().
 */
export async function pipeline() {
  await setupUnixSocketServer(async (inputText: string) => {
    if (!inputText) {
      throw new Error('Empty input received from Unix socket');
    }

    console.log('Sending to model:', inputText);

    try {
      const summary = await summarizeText(inputText);
      console.log('Model response:', summary);
      return summary;
    } catch (error: any) {
      console.error('Summarization error:', error.message || error);
      return 'Error: Could not summarize text';
    }
  });
}
