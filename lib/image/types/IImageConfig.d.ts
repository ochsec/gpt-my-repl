export default interface IImageConfig {
    model: string;
    n: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null;
    quality?: 'standard' | 'hd';
    response_format: 'url' | 'b64_json' | null;
    size: '256x256' | '512x512' | '1024x1024' |
        '1792x1024' | '1024x1792' | null;
    style?: 'natural' | 'vivid';
    user?: string;
}
