import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";
import IEmailElementStyle from "../style/IEmailElementStyle";
import StyleHelper from "./StyleHelper";
import mergeStyle from "../style/mergeStyle";

export interface IButton extends IEmailElementStyle{
    href: string;
    text?: string;
    target?: "_blank" | "_top";
}

export default function Button({
    href,
    text,
    target = "_blank",
    style,
    ... a
}: IButton, ... children: XNode[]): XNode {
    if (!text && !children.length) {
        throw new Error("Either text or children must be set for Button");
    }
    style = mergeStyle({
        padding: "10px",
        margin: "10px",
        display: "inline-block",
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        border: "none",
        backgroundColor: "lightgreen",
        borderRadius: "10px",
        fontSize: "15pt"
    }, style);
    return <a
        href={href}
        target={target}
        style={StyleHelper.styleToString(style)}
        {... a}>
        { text }
        {... children}
    </a>;
}
