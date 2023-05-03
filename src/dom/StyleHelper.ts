import WebImage from "@web-atoms/core/dist/core/WebImage";
import IXStyle from "../core/IXStyle";
import { newCSSStyleDeclaration } from "../style/mergeStyle";


const toStyle = (style: IXStyle | string | CSSStyleDeclaration): CSSStyleDeclaration => {

    if (typeof style === "string") {
        const css = style;
        const cs = newCSSStyleDeclaration();
        cs.cssText = css;
        return cs;
    }

    const s = newCSSStyleDeclaration();
    if (style instanceof CSSStyleDeclaration) {
        return style;
    }
    for (const key in style) {
        if (Object.prototype.hasOwnProperty.call(style, key)) {
            const element = style[key];
            if (element === void 0 || element === null || element === "") {
                continue;
            }
            s[key] = element;
        }
    }
    return s;
};

export default class StyleHelper {

    public static styleToString(props: IXStyle): string;
    public static styleToString(style: string, props?: IXStyle): string;
    public static styleToString(style: string | IXStyle, props?: IXStyle): string {

        if(!style) {
            return;
        }

        const cs = toStyle(style);

        if(props) {
            const ps = toStyle(props);
            for (let index = 0; index < ps.length; index++) {
                const key = ps[index];
                let value = ps[key];
                if (value === undefined) {
                    continue;
                }
                if (value === null) {
                    continue;
                }
                if(value === "") {
                    continue;
                }
                cs[key] = value.toString();
            }
        }

        return cs.cssText;
    }

}
