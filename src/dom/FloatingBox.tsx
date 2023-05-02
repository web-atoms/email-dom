import XNode from "@web-atoms/core/dist/core/XNode";
import IEmailElementStyle from "../style/IEmailElementStyle";
import StyleHelper from "./StyleHelper";
import mergeStyle from "../style/mergeStyle";

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
