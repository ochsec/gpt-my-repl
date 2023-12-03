# gpt-my-repl

### An initialization script that enables peer programming with OpenAI in a REPL

`npm start` loads an OpenAI API Key and Organization, creates the OpenAI agent and then loads a Chat object that you can use in the REPL to send prompts to ChatGPT and store answers.

Start a Deno REPL with a Chat object loaded that allows you to:
- Set a configuration 
    - Set a [model](https://platform.openai.com/docs/api-reference/models): `> Chat.setModel(<model>)`
    - Set a temperature: `> Chat.setTemp(0.1)`
    - Set message memory: `> Chat.setMemory(20)`
- Ask a question in the repl:
    - `> var code = Chat.getPrompt('./examples/main.go', 'utf8')`
    - `> var answer = await Chat.complete('What does the following program do?\n' + code)`
- Get history: 
    - `> Chat.getHistory()`
    - `> Chat.getLast()`
- Convert web pages to smaller docs that GPT models can use for context
    - `var doc = await Chat.makeDoc('https://code.visualstudio.com/api/extension-guides/webview')`
- Do anything else you can do in the Node.js REPL:
    - Read/write files: modules `fs` and `path` loaded on initialization
        `Chat.saveFile(`./completions/vscode-ext-docs/guides/webview.md`, doc)`
    - Import and use modules
    - Feed computational output into prompts


### Prerequisites
1. An [OpenAI](https://platform.openai.com) API Key and Organization Id
2. A recent version of Deno
### Instructions for Use
1. Clone this repository
2. `$ cd gpt-my-repl`
3. Create a .env file with the following lines:
```
OPENAI_API_KEY=<your API key>
ORGANIZATION=<your organization id>
```
3. `$ npm install`
4. `$ npm start`

### Complete list of commands

#### Configuration
- `Chat.setDefaultConfig()`: Reset to the initial configuration:
    - Model: `gpt-3.5-turbo`
    - Temperature: `0`
    - Top P: `1`
    - Frequency Penalty: `0`
    - Presence Penalty: `0`
- `Chat.getConfig()`: Print the current configurations
- `Chat.setModel(<model: string>)`: Set a valid model
- `Chat.setTemp(<temperature: float>)`: Set a valid temperature
- `Chat.setMemory(<steps: integer>)`: Set the number of messages from history sent with the new prompt.
- `Chat.getMemory()`: Since memory is not part of the API params, this is a separate getter to return the current memory size in messages

#### Completions
- `await Chat.complete(<prompt: string>)`: Returns a completion with the current configuration.
- `Chat.getLast() -> object`: Returns the last completion in history.
- `Chat.getHistory() -> object[]`: Returns an array of the history of completions in reverse-chronological order.
- `Chat.saveHistory(<filePath: string>)`: Save all chat history to a file.
- `Chat.loadHistory(<filePath: string>)`: Load messages from a JSON file into the history array.
- `Chat.clearHistory()`: Clear the messages in history.
- `Chat.tokenUsage(<messages: object[]) -> object`: Calculates tokens used in the provided messag history array. Return an object.

#### Utilities
- `Chat.help()`: Print the available methods on the Chat object
- `Chat.setWorkDir(<dirPath: string>)`: Set the working directory in the REPL
- `Chat.saveFile(<filePath: string>, <completion: string | array | object>)`: Save data as string to a file.
- `Chat.loadFile(<filePath: string>)`: Load utf8 string data (text, JSON) in from a file.
- `await Chat.fetch(<url: string>) -> string`: Fetch a web page's html.
- `await Chat.extractFromHtml(<html: string>, <url: string>) -> object`: Uses the npm package @extractus/article-extractor to extract content from a web page and creates stripped-down article html (like in Safari's Reader mode). Returns an object with some properties (title, description, content, etc).
- `Chat.htmlToMarkdown(<html: string>) -> string`: Translates html to markdown and returns the markdown.
- `await Chat.makeDoc(<url: string>, <type: string> = 'markdown) -> string`: Fetches the contents of a web page, extracts article (text content) and converts content to the specified type (i.e. markdown, text). Returns article in final format.