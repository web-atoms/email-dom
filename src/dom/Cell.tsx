import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";

import StyleHelper from "./StyleHelper";

export interface IITem {
    colSpan?: string;
    rowSpan?: string;
    style?: IXStyle;
    children?: XNode[];
}

export default function Cell(prop: IITem, ... children: XNode[]): XNode {
    prop.children  = prop.children || children;
    return <td
        rowSpan={prop.rowSpan || undefined}
        colSpan={prop.colSpan || undefined}
        style={ StyleHelper.styleToString(prop.style) }>
        {prop.children}
    </td>;
}
