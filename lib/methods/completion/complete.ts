import { IMessageItem } from "../../types/History.d.ts";
import State from "../../state/state.ts";

export default async function complete(input: string): Promise<string | undefined> {
    const openai = State.getOpenAIApi();
    const memory = State.getMemory();
    const config = State.getConfig();
    let message: IMessageItem, messages: Array<IMessageItem>;
    let history = State.getHistory();

    if (typeof input === 'string') {
        message = {role: 'user', content: input};
        history = [ ...history, message ];
    } else {
        // Let API handle malformed message arrays in error response
        history = [...history, ...input];
    }

    State.setHistory(history);

    // Set memory
    if (history.length > memory) {
        messages = history.slice(-memory);
    } else {
        messages = history;
    }
    const params = Object.assign(config, { messages: messages });
    console.log(params);
    try {
        const response = await openai.createChatCompletion(params);
        const answer = response.data?.choices[0]?.message?.content;
        console.log(answer);
        history.push({
            role: 'system',
            content: answer,
        });
        State.setHistory(history);
        return answer;
    } catch (error) {
        throw new Error(error);
    }
}
