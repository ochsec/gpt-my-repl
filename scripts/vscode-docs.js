const fs = require('fs');
const cheerio = require('cheerio');
const url = require('url');
const { Chat } = require('../lib/chat');

(async function () {
    Chat.setDefaultConfig();

    var baseUrl = 'https://code.visualstudio.com/api/';
    var baseCompletionsDir = `./completions/vscode-ext-docs/`;
    
    function createDir(directoryPath) {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
          } 
    }

    function getNavLinks(html) {
        const $ = cheerio.load(html);
        const ulElement = $('#main-nav');
        const links = ulElement.find('a').map((index, element) => {
            const href = $(element).attr('href');
            return url.resolve('https://code.visualstudio.com', href);
        }).get();

        return links;
    }
    
    const html = await Chat.fetch(baseUrl);
    const links = getNavLinks(html);

    for (let link of links) {
        Chat.clearHistory();
        let md = await Chat.makeDoc(link);
        let path = link.split(baseUrl)[1];
        if (path) {
            createDir('../' + baseCompletionsDir + path.split('/')[0]);
            Chat.saveFile('../' + baseCompletionsDir + path + '.md', md);
        }
    }
})();
