import XNode from "@web-atoms/core/dist/core/XNode";
import IEmailElementStyle from "../style/IEmailElementStyle";
import mergeStyle from "../style/mergeStyle";
import StyleHelper from "./StyleHelper";

export default function Hr({ style }: IEmailElementStyle) {
    style = mergeStyle({
        border: "none",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "rgba(200,200,200, 0.5)",
    }, style);
    return <hr style={StyleHelper.styleToString(style)}/>;
}