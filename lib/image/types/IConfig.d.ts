import IChatConfig from "./IImageConfig.d.ts";

interface IConfig {
    getConfig(): IChatConfig;
    getN(): number | null;
    getQuality(): string | null;
    getRespFormat(): string | null;
    getSize(): string | null;
    getStyle(): string | null;
    getUser(): string | null;
    setN(n: number): void;
    setQuality(quality: string | null): void;
    setRespFormat(format: string | null): void;
    setSize(size: string | null): void;
    setStyle(style: string | null): void;
    setUser(user: string | null): void;
}

export default IConfig;