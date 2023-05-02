import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";
import IEmailElementStyle from "../style/IEmailElementStyle";
import StyleHelper from "./StyleHelper";
import mergeStyle from "../style/mergeStyle";

export interface IImageProperties extends IEmailElementStyle {
    src: string;
    alt: string;
    className?: string;
    tooltip?: string;
    link?: string;
    linkTarget?: "_blank" | "_top";
    linkClassName?: string;
    linkStyle?: IXStyle;
}

export default function Image({
    alt,
    tooltip = alt,
    link,
    linkTarget,
    linkClassName,
    linkStyle,
    src,
    className,
    style,
    ... a
}: IImageProperties): XNode {

    if (link) {

        linkStyle = mergeStyle({
            border: "none"
        }, linkStyle);

        return <a
            href={link}
            target={linkTarget}
            class={linkClassName}
            style={StyleHelper.styleToString(linkStyle)}
            { ... a}>
            <img
                src={src}
                alt={alt}
                title={tooltip}
                class={className}
                style={StyleHelper.styleToString(style)}
                />
        </a>;
    }

    return <img
        src={src}
        alt={alt}
        title={tooltip}
        class={className}
        style={StyleHelper.styleToString(style)}
        { ... a}
        />;
}
