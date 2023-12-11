import State from "../../state/state.ts";

export default function clearHistory(): void {
    State.setHistory([]);
}
