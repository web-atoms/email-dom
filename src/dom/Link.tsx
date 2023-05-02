import XNode from "@web-atoms/core/dist/core/XNode";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import IXStyle from "../core/IXStyle";

export interface ILink {
    text?: string;
    href: string;
    target?: "_blank" | "_top";
    style?: IXStyle;
    children?: XNode[];
}

export default function Link(link: ILink, ... children: XNode[]): XNode {
    link.children = link.children || children;
    return <a
        style={link.style}
        href={link.href}
        target={link.target}
        >
        {link.text || link.children}
    </a>;
}
