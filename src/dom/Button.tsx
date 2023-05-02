import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle, { mergeStyle } from "../core/IXStyle";

export interface IButton {
    href: string;
    text?: string;
    target?: "_blank" | "_top";
    style?: IXStyle;
    children?: XNode[];
}

export default function Button(button: IButton, ... children: XNode[]): XNode {
    button.children = button.children || children;
    if (!button.text && !button.children) {
        throw new Error("Either text or children must be set for Button");
    }
    button.target = button.target === undefined ? "_blank" : button.target;
    button.style = mergeStyle({
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
    }, button.style);
    return <a
        href={button.href}
        target={button.target}
        style={button.style}>
        {button.text || children}
    </a>;
}
