import * as net from 'net';
import { existsSync, unlinkSync } from 'fs';
import { Socket } from 'net';

const socketPath = '/tmp/mysocket.sock';

export async function setupUnixSocketServer(onMessage: (input: string) => Promise<string>) {
  if (existsSync(socketPath)) {
    unlinkSync(socketPath);
  }

  const server = net.createServer((clientSocket: Socket) => {
    console.log('Client connected');
    let buffer = '';

    clientSocket.on('data', async (chunk: Buffer) => {
      buffer += chunk.toString('utf8');

      let boundary;
      while ((boundary = buffer.indexOf('\n')) !== -1) {
        const rawText = buffer.slice(0, boundary).trim();
        buffer = buffer.slice(boundary + 1);

        console.log('Received text:', rawText);

        try {
          const summary = await onMessage(rawText);
          clientSocket.write(`Summary: ${summary}\n`);
        } catch (err) {
          console.error('Summarization error:', err);
          clientSocket.write('Error: Could not summarize\n');
        }
      }
    });

    clientSocket.on('end', () => {
      console.log('Client disconnected');
    });
  });

  await new Promise<void>((resolve, reject) => {
    server.listen(socketPath, () => {
      console.log(`Server listening on ${socketPath}`);
      resolve();
    });

    server.on('error', reject);
  });
}
