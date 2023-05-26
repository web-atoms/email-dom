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
    poweredBy?: string;
    poweredByLink?: string;
    refID?: string;
    backgroundColor?: string;
}

export default function Email(
    {
        width,
        emailBox,
        unsubscribeLink,
        poweredBy,
        poweredByLink,
        style,
        backgroundColor,
        refID = "[$refid$]",
        ... a
    }: IEmailModelParameter,
    ... children: XNode[]
): XNode {

    style =  mergeStyle({
        width: "100%",
        margin: "0",
        padding: "10px",
        webkitTextSizeAdjust: "100%",
        // @ts-expect-error
        msTextSizeAdjust: "100%",
        fontFamily: "Arial",
        // @ts-expect-error
        width: "100%",
        backgroundColor: "#808080",
        textAlign: "center",
    }
        , style
    );

    const bodyStyle = mergeStyle({
        width: width || "600px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor,
        borderRadius: "10px",
        padding: "10px",
    });

    return <div
            style={StyleHelper.styleToString(style)}
            { ... a}>
            <div style={StyleHelper.styleToString(bodyStyle)}>
                <Table width="100%" height="100%">
                    <Row>
                        <Cell>
                            {...children}
                        </Cell>
                    </Row>
                </Table>
                <EmailFooter
                    unsubscribeLink={unsubscribeLink}
                    poweredBy={poweredBy}
                    poweredByLink={poweredByLink}
                    refID={refID}
                    />
            </div>
        </div>;

}
