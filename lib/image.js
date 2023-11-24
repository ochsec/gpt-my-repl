const fs = require('fs');

const Image = {
    _config: {},
    _history: [],
    getConfig: function () {
        return this._config;
    },
    setModel: function (name) {
        this._config.model = name;
    },
    setN: function (n) {
        if (n < 1 || n > 10) {
            console.warn('N must be between 1 and 10.');
            return;
        }
        if (this._config.model.toLowerCase() === 'dall-e-3' && n > 1) {
            console.warn('Dall-e 3 only supports n=1.');
            return;
        }
        this._config.model = name;
    },
    setRespFormat: function (format) {
        if (format.toLowerCase() === 'url') {
            this._config.response_format = 'url';
        } else {
            this._config.response_format = 'b64_json';
        }
    },
    setDefaultConfig: function () {
        this._config = {
            model: 'dall-e-3',
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        };
    },
    create: async function (prompt) {
        this._config.prompt = prompt;
        const response = await openai.createImage(this._config);
          image_url = response;
          return response;
    },
    save: function (filename, data) {
        const binaryData = Buffer.from(data, 'base64');
        fs.writeFile(`${filename}.png`, binaryData, 'binary', (err) => {
            if (err) {
                throw err;
            }

            console.log(`${filename}.png saved successfully.`);
        });
    }
};

module.exports = {
    Image,
};