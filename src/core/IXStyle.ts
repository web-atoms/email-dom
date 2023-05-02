export default interface IXStyle extends Partial<CSSStyleDeclaration> {

}

export function mergeStyle(... styles: Partial<CSSStyleDeclaration>[]) {
    const s = new CSSStyleDeclaration();
    for (const iterator of styles) {
        for (let index = 0; index < iterator.length; index++) {
            const name = iterator[index];
            const value = iterator[name];
            s[name] = value;
        }
    }
    return s;
}
