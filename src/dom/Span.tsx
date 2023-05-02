import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";

import StyleHelper from "./StyleHelper";

export interface ISpanModel {
    text?: string;
    style?: IXStyle;
}

export default function Span(span: ISpanModel): XNode {
    return <span style={StyleHelper.styleToString(span.style)}>
        {span.text}
    </span>;
}
