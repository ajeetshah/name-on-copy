interface IOptions {
    suffix?: string;
    useSpaces?: boolean;
    isFileName?: boolean;
}
export default function nameOnCopy(source?: string, names?: string[], options?: IOptions): string;
export {};
