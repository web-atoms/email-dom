import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";
import mergeStyle from "../style/mergeStyle";
import IEmailElementStyle from "../style/IEmailElementStyle";
import StyleHelper from "./StyleHelper";

export interface IBox extends IEmailElementStyle {
    borderTop?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRight?: string;
    border?: string;
    radius?: string | number;
    align?: "center" | "left" | "right" | "justify";
    padding?: string;
    margin?: string;
}

export default function TextBox({
    style,
    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    radius,
    align = "center",
    margin = "0",
    padding = "10px",
    ... a
}: IBox, ... children: XNode[]): XNode {

    style = mergeStyle({
        border,
        borderTop,
        borderLeft,
        borderRight,
        borderBottom,
        borderRadius: radius ? (typeof radius === "number" ? ( `${radius}px` ) : radius ) : null,
        textAlign: align,
        margin: margin,
        padding: padding
    }, style);

    if (style.borderRadius) {
        style.padding = style.borderRadius;
    }

    style = mergeStyle(style, style);

    return <div style={StyleHelper.styleToString(style)} { ... a}>
        {...children}
    </div>;
}
