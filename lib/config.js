const Config = {
    _config: {},
    _memory: 10,
    _getModels: async function () {
        const response = await openai.listEngines();
        this._models = response['data'].map(m => m.id);
    },
    _models: [],
    _validateModel: function (model) {
        return this._models.includes(model);
    },
    _validateTemp: function (temp) {
        return (0 <= temp) && (temp <= 1);
    },
    getConfig: function () {
        return this._config;
    },
    setDefaultConfig: function () {
        this._config = {
            model: 'gpt-3.5-turbo-16k',
            temperature: 0,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    },
    setModel: function (model) {
        if (this._validateModel) {
            this._config.model = model;
        } else {
            console.log(`Model '${model}' is not in the available models.`);            
        }
    },
    setTemp: function (temp) {
        if (this._validateTemp(temp)) {
            this._config.temperature = temp;
        } else {
            console.log(`Temperature must be between 0 and 1`);
        }
    },
    setMemory: function (steps) {
        if (steps > 15) {
            if (this._config.model !== 'gpt-3.5-turbo-16k' && !this._config.model.includes('gpt-4')) {
                console.log(`Memory set to ${steps} messages. I sure hope you know what you're doing!`);
            }
        } 
        this._memory = steps;
    },
    getMemory: function () {
        return this._memory;
    },
};

module.exports = { Config };