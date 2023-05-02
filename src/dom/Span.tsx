import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";

import StyleHelper from "./StyleHelper";
import IEmailElementStyle from "../style/IEmailElementStyle";

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
