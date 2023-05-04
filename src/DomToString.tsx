import XNode from "@web-atoms/core/dist/core/XNode";
import StyleHelper from "./dom/StyleHelper";

export default function DomToString(node: XNode) {

    const div = document.createElement("div");
    render(div, node);
    return div.innerHTML;

}
function render(div: HTMLDivElement, node: XNode) {

    while(typeof node.name === "function") {
        node = node.name(node.attributes, ... node.children);
    }

    const a = node.attributes;
    if (a) {
        for (const key in a) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                let element = a[key];
                if (element === null || element === void 0) {
                    continue;
                }
                if (typeof element === "object" && key === "style") {
                    element = StyleHelper.styleToString(element);
                } else {
                    element = element.toString();
                }

                if(!element) {
                    continue;
                }

                if (key.startsWith("style") && key.length > 5) {
                    div.style[key.substring(5)] = element;
                    continue;
                }
                if(key.startsWith("data") && key.length > 4) {
                    if (key.indexOf("-") !== -1) {
                        div.setAttribute(key, element);
                        continue;
                    }
                    div.dataset[key.substring(4)] = element;
                    continue;
                }
                div[key] = element;
            }
        }
    }

    if (!node.children?.length) {
        return;
    }

    for (let iterator of node.children) {

        if(iterator === false || iterator === void 0 || iterator === null) {
            continue;
        }

        if (typeof iterator !== "object") {
            div.appendChild(document.createTextNode(iterator.toString()));
            continue;
        }

        while (typeof iterator.name === "function") {
            iterator = iterator.name(iterator.attributes, ... iterator.children);
        }
        const child = document.createElement(iterator.name);
        div.appendChild(child);
        render(div, child);
    }

}

