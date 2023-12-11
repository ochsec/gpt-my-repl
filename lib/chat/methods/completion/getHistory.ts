import State from "../../state/state.ts";
import HistoryType from "../../../types/History.js"

export default function getHistory(): HistoryType {
    return State.getHistory();
}
