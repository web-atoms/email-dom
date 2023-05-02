import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";

import StyleHelper from "./StyleHelper";
import IEmailElementStyle from "../style/IEmailElementStyle";

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
