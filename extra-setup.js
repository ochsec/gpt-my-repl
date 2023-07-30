const { Chat } = require('./lib/chat');

var question = Chat.loadFile('./examples/prompts/question.txt');
var replInit = Chat.loadFile('./repl-init.js');
var libChat = Chat.loadFile('./lib/chat.js');
var libConfig = Chat.loadFile('./lib/config.js');
var libComp = Chat.loadFile('./lib/completions.js');
var libUtils = Chat.loadFile('./lib/utils.js');

var prompt = 
`
${question}
${replInit}
${libChat}
${libConfig}
${libComp}
${libUtils}
`;

module.exports = {
    prompt,
};