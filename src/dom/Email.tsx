import Cell from "./Cell";
import EmailFooter from "./EmailFooter";
import Row from "./Row";
import StyleHelper, { IStyleSheet } from "./StyleHelper";
import Table from "./Table";

export interface IEmailModelParameter<T> {
    width?: string;
    email: IEmailModel<T>;
    children?: XNode[];
    styleSheet?: IStyleSheet;
    bodyStyle?: IXStyle;
    emailBox?: boolean;
}

export default function Email<T>(
    model: IEmailModelParameter<T>,
    ... children: XNode[]
): XNode {
    model.children = model.children || children;
    model.bodyStyle =  mergeStyle({
        fontFamily: "Arial",
        width: model.width || "600px"}
        , model.bodyStyle
    );

    // if we are in browser... let's send only div
    if (typeof window !== "undefined") {
        return <div style={ model.bodyStyle }>
            {model.children}
            <EmailFooter unsubscribeLink={model.email.unsubscribeLink}/>
        </div>;
    }

    return <html
        xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{model.email.subject}</title>
            {model.styleSheet && <style type="text/css">{StyleHelper.styleToCSS(model.styleSheet)}</style>}
        </head>
        {model.emailBox ? <body
            style={ mergeStyle({
                width: "100%",
                margin: 0,
                padding: 0,
                webkitTextSizeAdjust: "100%",
                msTextSizeAdjust: "100%",
            }, model.bodyStyle) }>
            <Table width="600px" height="100%">
                <Row>
                    <Cell>
                        {model.children}
                    </Cell>
                </Row>
            </Table>
            <EmailFooter unsubscribeLink={model.email.unsubscribeLink}/>
        </body>
        :
        <body style={ model.bodyStyle }>
        { model.children }
        <EmailFooter unsubscribeLink={model.email.unsubscribeLink}/>

        </body>
        }

    </html> ;

}
