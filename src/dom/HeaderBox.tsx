import Colors, { ColorItem } from "@web-atoms/core/dist/core/Colors.js"
import XNode from "@web-atoms/core/dist/core/XNode.js"
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration.js"
import IXStyle from "../core/IXStyle.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"
import StyleHelper from "./StyleHelper.js"
import mergeStyle from "../style/mergeStyle.js"

export interface IHeaderBox extends IEmailElementStyle {
    padding?: string;
    margin?: string;
    radius?: string;
    border?: string;
    headerBgColor?: ColorItem | string;
    headerColor?: ColorItem | string;
    headerStyle?: IXStyle;
    footerStyle?: IXStyle;
    header: string | XNode[];
    footerBgColor?: ColorItem;
    footerColor?: ColorItem;
    footer?: string | XNode[];
}

export default function HeaderBox(
    {
        padding = "10px",
        margin,
        radius,
        header,
        border,
        headerColor = "black",
        headerBgColor = "lightgray",
        headerStyle,
        footerStyle,
        footer,
        footerBgColor,
        footerColor,
        style,
        ... a
    }: IHeaderBox, ... children: XNode[]): XNode {

    headerStyle = mergeStyle({
        padding,
        borderRadius: radius,
        margin,
        backgroundColor: headerBgColor?.toString(),
        color: headerColor?.toString(),
        }, headerStyle
    );

    footerStyle = mergeStyle({
        padding,
        borderRadius: radius,
        margin,
        backgroundColor: footerBgColor?.toString(),
        color: footerColor?.toString(),
        }, footerStyle
    );

    return <section style={StyleHelper.styleToString(style)} { ... a}>
        {header && <header style={StyleHelper.styleToString(headerStyle)}>{ header }</header>}
        <div
            style-padding={padding}
            style-border={border}>
            {...children}
        </div>
        {footer && <footer style={StyleHelper.styleToString(footerStyle)}>{ footer }</footer>}
    </section>;
}
