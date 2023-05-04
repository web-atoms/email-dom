import IEmailElementStyle from "../style/IEmailElementStyle";
import mergeStyle from "../style/mergeStyle";

export default function Hr({ style }: IEmailElementStyle) {
    style = mergeStyle({
        border: "none",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "rgba(200,200,200, 0.5)",
    }, style);
}