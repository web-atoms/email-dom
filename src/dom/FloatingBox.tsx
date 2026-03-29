import XNode from "@web-atoms/core/dist/core/XNode.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"
import StyleHelper from "./StyleHelper.js"
import mergeStyle from "../style/mergeStyle.js"

export interface IBox extends IEmailElementStyle {
    width: string;
    height: string;
    margin?: string;
    padding?: string;
}

export default function FloatingBox({
    width,
    height,
    margin = "5px",
    padding = "5px",
    style,
    ... a
}: IBox, ... children: XNode[]): XNode {

    style = mergeStyle({
            display: "inline-block",
            width,
            height,
            margin,
            padding,
            overflow: "hidden"
        },
        style
    );

    return <div style={StyleHelper.styleToString(style)} { ... a}>
        { ... children }
    </div>;
}
