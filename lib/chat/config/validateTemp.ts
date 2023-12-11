export default function validateTemp (temp: number): boolean {
    return (0 <= temp) && (temp <= 1);
}
