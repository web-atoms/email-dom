export function newCSSStyleDeclaration() {
    const e = document.createElement("div");
    return e.style;
}

export default function mergeStyle(... styles: Partial<CSSStyleDeclaration>[]) {
    const s = newCSSStyleDeclaration();
    for (const iterator of styles) {
        for (let index = 0; index < iterator.length; index++) {
            const name = iterator[index];
            let value = iterator[name];
            if (value === undefined) {
                continue;
            }
            if (value === null) {
                value = "";
            }
            s[name] = value.toString();
        }
    }
    return s;
}
