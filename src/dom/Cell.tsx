import XNode from "@web-atoms/core/dist/core/XNode.js"
import IXStyle from "../core/IXStyle.js"

import StyleHelper from "./StyleHelper.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"

export interface IITem extends IEmailElementStyle {
    colSpan?: string;
    rowSpan?: string;
}

export default function Cell({
    rowSpan,
    colSpan,
    style,
    ... a
}: IITem, ... children: XNode[]): XNode {
    return <td
        rowSpan={rowSpan}
        colSpan={colSpan}
        style={ StyleHelper.styleToString(style) }
        {... a}>
        {... children}
    </td>;
}
