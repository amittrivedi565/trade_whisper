The error you're seeing:

```
Error in user YAML: (<unknown>): did not find expected alphabetic or numeric character while scanning an alias at line 7 column 1
```

is caused by the line:

```markdown
---
```

at the top **and bottom** of the README file. In **YAML or some parsers**, triple dashes (`---`) are interpreted as the beginning or end of a YAML document or block, and can cause confusion in contexts like front matter or structured parsers.

---

### ✅ **Fix**

Simply **remove the `---` lines** from the beginning and end of the file.

Here is the corrected `README.md` content:

---

# TradeWhisper Summarizer

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

---

Let me know if you’d like to include a `tsconfig.json` example or add example input/output for summaries.
