import XNode from "@web-atoms/core/dist/core/XNode";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import IXStyle, { mergeStyle } from "../core/IXStyle";

import StyleHelper from "./StyleHelper";

export interface IInlineDivModel {
    style?: IXStyle;
    children?: XNode[];
}

export default function InlineDiv(div: IInlineDivModel, ... children: XNode[]): XNode {
    div.children = div.children || children;
    return <span style={ StyleHelper.styleToString(
        mergeStyle({
        display: "inline-block",
        float: "left",
        padding: "5px",
        }, div.style )) }>
        { div.children }
    </span>;
}
