// const { Config } = require('./config');
// const { Completions } = require('./completions');
// const { Utils } = require('./utils');

import Completions from "./completions.ts";
import Utils from "./util.ts";

const Chat = {
    ...Completions,
    ...Utils,
};

export default Chat;