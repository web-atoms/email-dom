import XNode from "@web-atoms/core/dist/core/XNode";
import IXStyle from "../core/IXStyle";

export interface IImageProperties {
    src: string;
    alt: string;
    className?: string;
    style?: IXStyle;
    tooltip?: string;
    link?: string;
    linkTarget?: "_blank" | "_top";
    linkClassName?: string;
    linkStyle?: IXStyle;
}

export default function Image(prop: IImageProperties): XNode {

    prop.tooltip = prop.tooltip || prop.alt;

    if (prop.link) {
        return <a
            href={prop.link}
            target={prop.linkTarget}
            class={prop.linkClassName}
            style="border: none">
            <img
                src={prop.src}
                alt={prop.alt}
                title={prop.tooltip}
                class={prop.className}
                style={prop.style}
                />
        </a>;
    }

    return <img
        src={prop.src}
        alt={prop.alt}
        title={prop.tooltip}
        class={prop.className}
        style={prop.style}
        />;
}
