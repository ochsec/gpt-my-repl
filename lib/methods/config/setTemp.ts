import State from "../../state/state.ts";
import validateTemp from "./validateTemp.ts";

export default function setTemp(temp: number): void {
    if (validateTemp(temp)) {
        const config = State.getConfig();
        config.temperature = temp;
        State.setConfig(config);
    } else {
        console.log(`Temperature must be between 0 and 1`);
    }
}
