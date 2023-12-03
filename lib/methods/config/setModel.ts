import State from "../../state/state.ts";
import validateModel from "./validateModel.ts";

export default function setModel(model: string): void {
    if (validateModel(model)) {
        const config = State.getConfig();
        config.model = model;
        State.setConfig(config);
    } else {
        console.log(`Model '${model}' is not in OpenAI's available models list.`);            
    }
}
