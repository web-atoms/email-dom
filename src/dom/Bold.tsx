import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";
import IEmailElementStyle from "../style/IEmailElementStyle";
import StyleHelper from "./StyleHelper";
import mergeStyle from "../style/mergeStyle";

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
