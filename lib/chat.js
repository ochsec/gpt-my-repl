const { Config } = require('./config');
const { Completions } = require('./completions');
const { Utils } = require('./utils');

const Chat = {
    ...Config,
    ...Completions,
    ...Utils,
};

module.exports = {
    Chat,
};