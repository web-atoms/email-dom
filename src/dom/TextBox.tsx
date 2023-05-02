import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle, { mergeStyle } from "../core/IXStyle";

export interface IBox {
    borderTop?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRight?: string;
    border?: string;
    radius?: string | number;
    align?: "center" | "left" | "right" | "justify";
    padding?: string;
    margin?: string;
    style?: IXStyle;
    children?: XNode[];
}

export default function TextBox(box: IBox, ... children: XNode[]): XNode {
    box.children = box.children || children;
    const style = box.style;

    box.style = {
        border: box.border,
        borderTop: box.borderTop,
        borderLeft: box.borderLeft,
        borderRight: box.borderRight,
        borderBottom: box.borderBottom,
        borderRadius: box.radius ? (typeof box.radius === "number" ? ( `${box.radius}px` ) : box.radius ) : null,
        textAlign: box.align || "center",
        margin: box.margin || "0",
        padding: box.padding || "10px"
    };

    if (box.style.borderRadius) {
        box.style.padding = box.style.borderRadius;
    }

    box.style = mergeStyle(box.style, style);

    return <div style={box.style}>
        {box.children}
    </div>;
}
