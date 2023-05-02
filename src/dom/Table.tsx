import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";

import StyleHelper from "./StyleHelper";

export interface IBoxParameter {
    width?: string;
    height?: string;
    border?: string;
    className?: string;
    children?: XNode[];
    style?: IXStyle;
}

export default function Table(model: IBoxParameter, ... children: XNode[]): XNode {
    model.children = model.children || children;
    return <table
        width={model.width}
        height={model.height}
        border={model.border}
        style={StyleHelper.styleToString(model.style)}>
        <tbody>
            {model.children}
        </tbody>
    </table>;
}
