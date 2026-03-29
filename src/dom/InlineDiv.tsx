import XNode from "@web-atoms/core/dist/core/XNode.js"

import StyleHelper from "./StyleHelper.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"
import mergeStyle from "../style/mergeStyle.js"

export interface IInlineDivModel extends IEmailElementStyle {
}

export default function InlineDiv( { style , ... a}: IInlineDivModel, ... children: XNode[]): XNode {
    style = mergeStyle({
        display: "inline-block",
        float: "left",
        padding: "5px",
        }, style );
    return <span style={ StyleHelper.styleToString(style) }
        { ... a}
        >
        { ... children }
    </span>;
}
