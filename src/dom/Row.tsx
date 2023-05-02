import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";

import StyleHelper from "./StyleHelper";

export interface IRowModel {
    className?: string;
    style?: IXStyle;
    children?: XNode[];
}

export default function Row(row: IRowModel, ... children: XNode[]): XNode {
    row.children = row.children || children;
    return <tr style={ StyleHelper.styleToString(row.style) }>
        {row.children}
    </tr>;
}
