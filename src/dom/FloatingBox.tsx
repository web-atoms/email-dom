import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle, { mergeStyle } from "../core/IXStyle";

export interface IBox {
    width: string;
    height: string;
    margin?: string;
    padding?: string;
    style?: IXStyle;
    children?: XNode[];
}

export default function FloatingBox(box: IBox, ... children: XNode[]): XNode {
    box.children = box.children || children;

    box.padding = box.padding || "5px";
    box.margin = box.margin || "5px";

    box.style = mergeStyle({
        display: "inline-block",
        width: box.width,
        height: box.height,
        margin: box.margin,
        padding: box.padding,
        overflow: "hidden"},
        box.style
    );

    return <div style={box.style}>
        { box.children }
    </div>;
}
