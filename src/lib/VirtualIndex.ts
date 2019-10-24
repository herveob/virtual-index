import { posix } from 'path';
import { statSync, readdirSync } from 'fs';

interface Module {
    [key: string]: any; 
}

const { basename, extname } = posix;

export const readModule = (path: string): Module => ({ [basename(path, extname(path))]: require(path) });

const virtualIndex = (pathList: string[]): any => {
    const actualPathList: string[] = pathList;

    return actualPathList.reduce((acc: any, path: string) => {
        return {
            ...acc,
            ...statSync(path).isDirectory() ? virtualIndex(readdirSync(path).map((e: string) => `${path}/${e}`)) : readModule(path)
        };
    }, {});
};

export default virtualIndex;