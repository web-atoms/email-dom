import XNode from "@web-atoms/core/dist/core/XNode";

import StyleHelper from "./StyleHelper";
import IEmailElementStyle from "../style/IEmailElementStyle";
import mergeStyle from "../style/mergeStyle";

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
