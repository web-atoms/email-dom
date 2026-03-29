import XNode from "@web-atoms/core/dist/core/XNode.js"
import IXStyle from "../core/IXStyle.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"
import StyleHelper from "./StyleHelper.js"
import mergeStyle from "../style/mergeStyle.js"

export interface IBold extends IEmailElementStyle {
}

export default function Bold( {
    style,
    ... a
}: IBold, ... children: XNode[]): XNode {
    style = mergeStyle({
        fontWeight: "bold"
    }, style);
    return <span style={StyleHelper.styleToString(style)} { ... a}>
        {... children}
    </span>;
}
