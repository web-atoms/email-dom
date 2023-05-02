import { StringHelper } from "@web-atoms/core/dist/core/StringHelper";
import WebImage from "@web-atoms/core/dist/core/WebImage";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import IXStyle from "../core/IXStyle";

// export interface IStyleSheet {
//     [key: string]: IStyleDeclaration;
// }

export default class StyleHelper {

    // public static styleToCSS(model: IStyleSheet): string {
    //     const styles: Array<[string, string]> = [];
    //     for (const key in model) {
    //         if (model.hasOwnProperty(key)) {
    //             const element = model[key];
    //             if (element === null || element === undefined) {
    //                 continue;
    //             }
    //             // if (element === "") {
    //             //     continue;
    //             // }
    //             styles.push([ key, StyleHelper.styleToString(null, element) ]);
    //         }
    //     }
    //     if (!styles.length) {
    //         return undefined;
    //     }
    //     return `${styles.map(([key, value]) => `${key} { ${value} }` ).join("\r\n")}`;
    // }

    public static styleToString(props: IXStyle): string;
    public static styleToString(style: string, props?: IStyleDeclaration): string;
    public static styleToString(style: string | IStyleDeclaration, props?: IStyleDeclaration): string {
        const styles: string[] = [];

        if (typeof style === "string") {
            styles.push(style);
        } else {
            if (style && typeof style === "object") {
                props = style;
            }
        }

        if (props) {
        }

        if (styles.length === 0) {
            return undefined;
        }

        return styles.join("; ");
    }

}
