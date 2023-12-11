import IChatConfig from "../../chat/types/IChatConfig.js";
import State from "../../state/state.ts";

export default function getConfig(): IChatConfig {
    return State.getConfig();
}
