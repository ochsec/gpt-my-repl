import State from "../../state/state.ts";
import HistoryType from "../../types/History.d.ts"

export default function getHistory(): HistoryType {
    return State.getHistory();
}
