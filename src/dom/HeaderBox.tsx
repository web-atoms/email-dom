import Colors, { ColorItem } from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import IXStyle, { mergeStyle } from "../core/IXStyle";

export interface IHeaderBox {
    padding?: string;
    margin?: string;
    radius?: string;
    border?: string;
    headerBgColor?: ColorItem;
    headerColor?: ColorItem;
    headerStyle?: IXStyle;
    footerStyle?: IXStyle;
    style?: IXStyle;
    header: string | XNode[];
    footerBgColor?: ColorItem;
    footerColor?: ColorItem;
    footer?: string | XNode[];
    children?: XNode[];
}

export default function HeaderBox(box: IHeaderBox, ... children: XNode[]): XNode {
    box.children = box.children || children;
    box.padding = box.radius || box.padding || "10px";
    box.margin = box.margin || undefined;
    box.headerColor = box.headerColor || Colors.black;
    box.headerBgColor = box.headerBgColor || Colors.lightGray;

    box.headerStyle = mergeStyle({
        padding: box.padding,
        borderRadius: box.radius,
        margin: box.margin,
        backgroundColor: box.headerBgColor,
        color: box.headerColor,
        }, box.headerStyle
    );

    box.footerStyle = mergeStyle({
        padding: box.padding,
        borderRadius: box.radius,
        margin: box.margin,
        backgroundColor: box.footerBgColor,
        color: box.footerColor,
        }, box.footerStyle
    );

    return <section style={box.style}>
        {box.header && <header style={box.headerStyle}>{ box.header }</header>}
        <div
            style-padding={box.padding}
            style-border={box.border}>
            {box.children}
        </div>
        {box.footer && <footer style={box.footerStyle}>{ box.footer }</footer>}
    </section>;
}
