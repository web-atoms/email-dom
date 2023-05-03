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

        if (iterator instanceof CSSStyleDeclaration) {
            for (let index = 0; index < iterator.length; index++) {
                const name = iterator[index];
                let value = iterator[name]?.toString();
                if (value === void 0 || value === null || value === "") {
                    continue;
                }
                s[name] = value;
            }
            continue;
        }

        for (const key in iterator) {
            if (Object.prototype.hasOwnProperty.call(iterator, key)) {
                const element = iterator[key]?.toString();
                if (!element) {
                    continue;
                }
                s[key] = element;
            }
        }
    }
    return s;
}
