import State from "../../state/state.ts";

export default function setMaxTokens(n: number): void {
    const config = State.getConfig();
    config.max_tokens = n;
    State.setConfig(config);
}
