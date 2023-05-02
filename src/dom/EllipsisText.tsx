import XNode from "@web-atoms/core/dist/core/XNode";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import { CssNumber, cssNumberToString } from "@web-atoms/core/dist/web/styles/StyleBuilder";
import IXStyle, { mergeStyle } from "../core/IXStyle";

export interface ITextModel {
    text: string;
    width: CssNumber;
    style?: IXStyle;
}

export default function EllipsisText(model: ITextModel): XNode {

    model.style = mergeStyle({
        maxWidth: (cssNumberToString(model.width, "px")),
        display: "inline-block",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        }, model.style
    );

    return <span
        style={model.style}
        title={model.text}>
        {model.text}
    </span>;
}
