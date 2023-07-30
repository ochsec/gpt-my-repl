const { GPTTokens } = require('gpt-tokens');

const Completions = {
    _history: [],
    getHistory: function () {
        return this._history;
    },
    getLast: function () {
        return this._history[this._history.length - 1];
    },
    saveHistory: function (filePath) {
        const data = this._history;
        this.saveFile(filePath, data);
    },
    loadHistory: function (filePath) {
        const data = this.loadFile(filePath);
        this._history = JSON.parse(data);
    },
    clearHistory: function () {
        this._history = [];
    },
    complete: async function (input) {
        let message, messages;
        if (typeof input === 'string') {
            message = {role: 'user', content: input};
            this._history.push(message);
        } else {
            messages = input; // Let API handle malformed message arrays in error response
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
    tokenUsage: function (messages) {
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

module.exports = { Completions };