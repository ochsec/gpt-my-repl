import State from "../../state/state.ts"

export default function setDefaultConfig(): void {
    State.setConfig({
        model: 'gpt-3.5-turbo-16k',
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
}
