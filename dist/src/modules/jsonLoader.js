import { readFileSync } from 'fs';
export function loadFromFile(path) {
    console.warn('now loading file on ' + path);
    const buffer = readFileSync(path, 'utf-8');
    const result = buffer;
    if (!result) {
        throw Error('any json file exist on this path: ' + path);
    }
    return JSON.parse(result);
}
//# sourceMappingURL=jsonLoader.js.map