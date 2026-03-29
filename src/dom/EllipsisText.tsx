import XNode from "@web-atoms/core/dist/core/XNode.js"
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration.js"
import { CssNumber, cssNumberToString } from "@web-atoms/core/dist/web/styles/StyleBuilder.js"
import IXStyle from "../core/IXStyle.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"
import StyleHelper from "./StyleHelper.js"
import mergeStyle from "../style/mergeStyle.js"

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
