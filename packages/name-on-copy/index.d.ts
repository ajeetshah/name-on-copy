declare type TParenthesis = '(' | '{' | '[';
interface IOptions {
    suffix?: string;
    useSpaces?: boolean;
    isFileName?: boolean;
    parenthesis?: TParenthesis;
}
export default function nameOnCopy(source?: string, names?: string[], options?: IOptions): string;
export {};
