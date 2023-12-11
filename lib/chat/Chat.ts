import Completion from "./methods/completion/Completion.ts";
import Config from "./config/Config.ts";
import Util from "./methods/util/Util.ts";

const Chat = {
    ...Completion,
    ...Config,
    ...Util,
};

export default Chat;