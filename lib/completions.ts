import { GPTTokens } from 'gpt-tokens';
import CompletionsType from "./types/Completions.d.ts";
import { OpenAIApi } from "openai";
import { saveFile, loadFile } from "./util.ts";

declare let openai: OpenAIApi;

interface ITokenUsageResponse {
    prompt: number;
    completion: number;
    total: number;
}

interface IMessageItem {
    name?: string;
    role: 'system' | 'user' | 'assistant';
    content: string;
}

const Completions: CompletionsType = {
    _history: [],
    getHistory: function () {
        return this._history;
    },
    getLast: function () {
        return this._history[this._history.length - 1];
    },
    saveHistory: function (filePath: string) {
        const data = this._history;
        saveFile(filePath, data);
    },
    loadHistory: function (filePath: string) {
        const data = loadFile(filePath);
        this._history = JSON.parse(data);
    },
    clearHistory: function () {
        this._history = [];
    },
    complete: async function (input: string) {
        let message, messages;
        if (typeof input === 'string') {
            message = {role: 'user', content: input};
            this._history.push(message);
        } else {
            // Let API handle malformed message arrays in error response
            this._history = [...this._history, ...input];
        }

        // Set memory
        if (this._history.length > this._memory) {
            messages = this._history.slice(-this._memory);
        } else {
            messages = this._history;
        }
        const params = Object.assign(this._config, { messages: messages });
        console.log(params);
        try {
            const response = await openai.createChatCompletion(params);
            const answer = response.data.choices[0].message.content;
            console.log(answer);
            this._history.push({
                role: 'system',
                content: answer,
            });
            return answer;
        } catch (error) {
            throw new Error(error);
        }
    },
    tokenUsage: function (messages: IMessageItem[]): ITokenUsageResponse {
        const model = this.getConfig().model;
        const usageInfo = new GPTTokens({
            model,
            messages,
        });
        return {
            prompt: usageInfo.promptUsedTokens,
            completion: usageInfo.completionUsedTokens,
            total: usageInfo.usedTokens,
        };
    },
};

export default Completions;