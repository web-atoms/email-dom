import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle, { mergeStyle } from "../core/IXStyle";

export interface IBold {
    style?: IXStyle;
    children?: XNode[];
}

export default function Bold(bold: IBold, ... children: XNode[]): XNode {
    bold.children = bold.children || children;
    bold.style = mergeStyle({
        fontWeight: "bold"
    }, bold.style);
    return <span style={bold.style}>
        {bold.children}
    </span>;
}
