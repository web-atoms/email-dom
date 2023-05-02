import XNode from "@web-atoms/core/dist/core/XNode";
import IEmailElementStyle from "../style/IEmailElementStyle";
import StyleHelper from "./StyleHelper";
import mergeStyle from "../style/mergeStyle";

export interface IPre extends IEmailElementStyle {
}

export default function Pre({
    style ,
    ... a
}: IPre, ... children: XNode[]) {
    style = mergeStyle({
        whiteSpace: "pre-line",
        fontFamily: "Arial,Helvetica,sans-serif",
        fontSize: "9pt",
        marginTop: "0px",
        marginBottom: "0px",
    }, style);
    return <pre
        style = {StyleHelper.styleToString(style)}
        { ... a}>
        {...children}
    </pre>;
}
