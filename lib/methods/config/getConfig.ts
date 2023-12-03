import IChatConfig from "../../types/IChatConfig.d.ts";
import State from "../../state/state.ts";

export default function getConfig(): IChatConfig {
    return State.getConfig();
}
