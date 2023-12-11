import IChatConfig from "../../chat/types/IChatConfig.d.ts";

interface IConfig {
    getConfig(): IChatConfig;
    getMemory(): number;
    getModels(): Promise<string[]>;
    setDefaultConfig(): void;
    setMaxTokens(n: number): void;
    setMemory(steps: number): void;
    setModel(model: string): void;
    setTemp(temp: number): void;
    validateModel(model: string): boolean;
    validateTemp (temp: number): boolean;
}

export default IConfig;