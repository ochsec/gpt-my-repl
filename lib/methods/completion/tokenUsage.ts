import { GPTTokens, supportModelType } from 'gpt-tokens';
import { MessageItem, ITokenUsageResponse } from "../../types/TokenUsage.d.ts";
import State from "../../state/state.ts";

export default function tokenUsage(messages: MessageItem[]): ITokenUsageResponse {
    const model = State.getConfig().model as supportModelType;
    const usageInfo = new GPTTokens({
        model,
        messages,
    });
    return {
        prompt: usageInfo.promptUsedTokens,
        completion: usageInfo.completionUsedTokens,
        total: usageInfo.usedTokens,
    };
}
