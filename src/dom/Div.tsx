import XNode from "@web-atoms/core/dist/core/XNode.js"
import IXStyle from "../core/IXStyle.js"

import StyleHelper from "./StyleHelper.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"

export interface IDivModel extends IEmailElementStyle {
}

export default function Div({
    style,
    ... a
}: IDivModel, ... children: XNode[]): XNode {
    return <div style={ StyleHelper.styleToString(style) } { ... a}>
        { ... children }
    </div>;
}
