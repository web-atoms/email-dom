import XNode from "@web-atoms/core/dist/core/XNode";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

import TextBox from "./TextBox";

const footerStyle: IStyleDeclaration = {
    margin: "10px 0 10px",
    borderTop: "solid 1px orange",
    width: "100%"
};

const linkStyle: IStyleDeclaration = {
    textDecoration: "underline",
    textAlign: "right"
};

export interface IEmailFooter {
    unsubscribeLink?: string;
    trackUrl?: string;
}

export default function EmailFooter<T>({
    unsubscribeLink,
    trackUrl,
    ... a
}: IEmailFooter): XNode[] {
    return <table
        style={footerStyle}
        { ... a}>
        <tr>
            <td>
                {unsubscribeLink
                    ? <a href={unsubscribeLink} target="_blank">Unsubscribe</a>
                    : ""}
            </td>
            <td style="text-align: right">
                <a style={linkStyle} href="https://800casting.com"  target="_blank">Powered by 800Casting</a>
            </td>
        </tr>
        <tr>
            <td>
                {trackUrl
                ? <img src={trackUrl} alt="none" style="max-width: 1px; max-height: 1px"/>
                : <span style-display="none">tracking</span>}
                <div style="color: gray; font-size: 70%">$$EMAILID$$</div>
            </td>
        </tr>
    </table>;

}
