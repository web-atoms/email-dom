import Colors, { ColorItem } from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import IXStyle from "../core/IXStyle";
import IEmailElementStyle from "../style/IEmailElementStyle";
import StyleHelper from "./StyleHelper";
import mergeStyle from "../style/mergeStyle";

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
        {header && <header style={headerStyle}>{ header }</header>}
        <div
            style-padding={padding}
            style-border={border}>
            {...children}
        </div>
        {footer && <footer style={StyleHelper.styleToString(footerStyle)}>{ footer }</footer>}
    </section>;
}
