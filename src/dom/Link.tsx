import XNode from "@web-atoms/core/dist/core/XNode.js"
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration.js"
import IXStyle from "../core/IXStyle.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"
import StyleHelper from "./StyleHelper.js"

export interface ILink extends IEmailElementStyle {
    text?: string;
    href: string;
    target?: "_blank" | "_top";
}

export default function Link({
    text,
    href,
    target = "_blank",
    style,
    ... a
}: ILink, ... children: XNode[]): XNode {
    return <a
        style={StyleHelper.styleToString(style)}
        href={href}
        target={target}
        >
        {text}
        { ... children}
    </a>;
}
