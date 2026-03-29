import XNode from "@web-atoms/core/dist/core/XNode.js"
import IXStyle from "../core/IXStyle.js"

import StyleHelper from "./StyleHelper.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"

export interface IRowModel extends IEmailElementStyle {
}

export default function Row({ style, ... a}: IRowModel, ... children: XNode[]): XNode {
    return <tr style={ StyleHelper.styleToString(style) } {...a}>
        {...children}
    </tr>;
}
