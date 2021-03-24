export declare function isUnique(value: string, values: string[]): boolean;
export declare function getFileNameAndExtension(value: string): {
    fileName: string;
    extension: string;
};
export declare function increment(value: string, useSpaces: boolean): string;
export declare function generateFirst(source: string, suffix: string, useSpaces: boolean, isFileName: boolean): string;
export declare function generateNext(name: string, useSpaces: boolean, isFileName: boolean): string;
