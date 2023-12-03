import { Engine } from "openai";
import State from "../../state/state.ts";

async function getOpenAIModels() {
    const openai = State.getOpenAIApi();
    const response = await openai.listEngines();
    State.setModels(response.data.data.map((m: Engine) => m.id));
}

export default async function getModels() {
    if (State.getModels().length === 0) {
        try {
            await getOpenAIModels();
        } catch (e) {
            console.error(e);
        }
    }
    return State.getModels();
}
