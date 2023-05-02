import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";

import StyleHelper from "./StyleHelper";
import IEmailElementStyle from "../style/IEmailElementStyle";

export interface IBoxParameter extends IEmailElementStyle {
    width?: string;
    height?: string;
    border?: string;
}

export default function Table({
    width,
    height,
    border,
    style,
    ... a
}: IBoxParameter, ... children: XNode[]): XNode {
    return <table
        width={width}
        height={height}
        border={border}
        style={StyleHelper.styleToString(style)}>
        <tbody>
            {...children}
        </tbody>
    </table>;
}
