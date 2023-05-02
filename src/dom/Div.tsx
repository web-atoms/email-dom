import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";

import StyleHelper from "./StyleHelper";

export interface IDivModel {
    style?: IXStyle;
    children?: XNode[];
}

export default function Div(div: IDivModel, ... children: XNode[]): XNode {
    div.children = div.children || children;
    return <div style={ StyleHelper.styleToString(div.style) }>
        { div.children }
    </div>;
}
