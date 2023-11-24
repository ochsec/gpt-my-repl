// repl-init.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.ORGANIZATION,
});
const openai = new OpenAIApi(configuration);
const { Chat } = require('./lib/chat');
const { Image } = require('./lib/image');

Chat.setDefaultConfig();
Image.setDefaultConfig();

// var prompt = require('./extra-setup');

console.log('Modules fs and path have been loaded.')
console.log('Enter Chat.help() for available Chat methods.');
console.log('Press Return to Continue...');