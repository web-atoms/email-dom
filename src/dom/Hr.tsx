import XNode from "@web-atoms/core/dist/core/XNode.js"
import IEmailElementStyle from "../style/IEmailElementStyle.js"
import mergeStyle from "../style/mergeStyle.js"
import StyleHelper from "./StyleHelper.js"

export default function Hr({ style }: IEmailElementStyle) {
    style = mergeStyle({
        border: "none",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "rgba(200,200,200, 0.5)",
    }, style);
    return <hr style={StyleHelper.styleToString(style)}/>;
}