import XNode from "@web-atoms/core/dist/core/XNode.js"
import IXStyle from "../core/IXStyle.js"

import StyleHelper from "./StyleHelper.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"

export interface ISpanModel extends IEmailElementStyle {
    text?: string;
}

export default function Span({
    text,
    style,
    ... a
}: ISpanModel,
... nodes: XNode[]): XNode {
    return <span style={StyleHelper.styleToString(style)} { ... a}>
        {text}
        { ... nodes}
    </span>;
}
