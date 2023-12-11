import State from "../../state/state.ts";
import { IMessageItem } from "../../../types/History.js";

export default function getLast(): IMessageItem {
    return State.getHistory()[State.getHistory().length - 1];
}
