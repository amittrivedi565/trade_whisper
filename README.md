
A TypeScript-based service for summarizing content using the OpenAI API.

## 🛠️ Requirements

* Node.js (v16 or higher)
* npm (comes with Node.js)
* TypeScript

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/trade_whisper_summarizer.git
   cd trade_whisper_summarizer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add your OpenAI API key:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

## ▶️ Running the Project

You can run the project using TypeScript directly (with `ts-node`) or by compiling to JavaScript.

### Option 1: Run with `ts-node` (development)

1. Install `ts-node` globally (if you don’t have it):

   ```bash
   npm install -g ts-node
   ```

2. Start the project:

   ```bash
   ts-node main.ts
   ```

### Option 2: Compile & run (production)

1. Compile TypeScript:

   ```bash
   npx tsc
   ```

2. Run the compiled JavaScript:

   ```bash
   node dist/main.js
   ```

## 🧪 Testing

Testing is not implemented yet. Running the test script will show a placeholder message:

```bash
npm test
```
