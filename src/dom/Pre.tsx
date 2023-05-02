import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle, { mergeStyle } from "../core/IXStyle";

export interface IPre {
    style?: IXStyle;
    children?: XNode[];
}

export default function Pre(pre: IPre, ... children: XNode[]) {
    pre.children = pre.children || children;
    pre.style = mergeStyle({
        whiteSpace: "pre-line",
        fontFamily: "Arial,Helvetica,sans-serif",
        fontSize: "9pt",
        marginTop: "0px",
        marginBottom: "0px",
    }, pre.style);
    return <pre style = {pre.style}>
        {pre.children}
    </pre>;
}
