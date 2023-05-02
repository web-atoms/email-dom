import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";

import StyleHelper from "./StyleHelper";
import IEmailElementStyle from "../style/IEmailElementStyle";

export interface IRowModel extends IEmailElementStyle {
}

export default function Row({ style, ... a}: IRowModel, ... children: XNode[]): XNode {
    return <tr style={ StyleHelper.styleToString(style) } {...a}>
        {...children}
    </tr>;
}
