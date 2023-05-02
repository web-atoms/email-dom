import XNode from "@web-atoms/core/dist/core/XNode";
import Cell from "./Cell";
import EmailFooter from "./EmailFooter";
import Row from "./Row";
import StyleHelper from "./StyleHelper";
import Table from "./Table";
import IEmailElementStyle from "../style/IEmailElementStyle";
import mergeStyle from "../style/mergeStyle";

export interface IEmailModelParameter extends IEmailElementStyle {
    width?: string;
    emailBox?: boolean;
    unsubscribeLink?: string;
}

export default function Email(
    {
        width,
        emailBox,
        unsubscribeLink,
        style,
        ... a
    }: IEmailModelParameter,
    ... children: XNode[]
): XNode {

    style =  mergeStyle({
        width: "100%",
        margin: "0",
        padding: "0",
        webkitTextSizeAdjust: "100%",
        // @ts-expect-error
        msTextSizeAdjust: "100%",
        fontFamily: "Arial",
        // @ts-expect-error
        width: width || "600px"
    }
        , style
    );

    return <div
            style={StyleHelper.styleToString(style)}
            { ... a}>
            <Table width="600px" height="100%">
                <Row>
                    <Cell>
                        {...children}
                    </Cell>
                </Row>
            </Table>
            <EmailFooter unsubscribeLink={unsubscribeLink}/>
        </div>;

}
