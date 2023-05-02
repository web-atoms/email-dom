import XNode from "@web-atoms/core/dist/core/XNode";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import { CssNumber, cssNumberToString } from "@web-atoms/core/dist/web/styles/StyleBuilder";
import IXStyle from "../core/IXStyle";
import IEmailElementStyle from "../style/IEmailElementStyle";
import StyleHelper from "./StyleHelper";
import mergeStyle from "../style/mergeStyle";

export interface ITextModel extends IEmailElementStyle {
    text: string;
    width: CssNumber;
}

export default function EllipsisText({ text, width, style, ... a }: ITextModel, ... nodes: XNode[]): XNode {

    style = mergeStyle({
        maxWidth: (cssNumberToString(width, "px")),
        display: "inline-block",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        }, style
    );

    return <span
        style={StyleHelper.styleToString(style)}
        title={text}
        { ... a}>
        {text}
        {... nodes}
    </span>;
}
