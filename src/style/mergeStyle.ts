export function newCSSStyleDeclaration() {
    const e = document.createElement("div");
    return e.style;
}

export default function mergeStyle(... styles: Partial<CSSStyleDeclaration>[]) {
    const s = newCSSStyleDeclaration();
    for (const iterator of styles) {
        if (!iterator) {
            continue;
        }
        for (let index = 0; index < iterator.length; index++) {
            const name = iterator[index];
            let value = iterator[name];
            if (value === void 0 || value === null || value === "") {
                continue;
            }
            s[name] = value.toString();
        }
    }
    return s;
}
