import { PropsWithChildren } from "react"
import { classNames } from "../../utils/classNames"
import { TextProps } from "../Text/Text"
import "../Text/Text.css"
import "./Hyperlink.css"

export interface HyperlinkProps extends TextProps {
    href: string
}

export default function Hyperlink({ children, className, style, align, fontSize, fontWeight, color, href }: PropsWithChildren<HyperlinkProps>) {
    return (
        <a children={children} className={classNames(className, "hyperlink", "text", align ? `align-${align}` : undefined, fontSize ? `font-size-${fontSize}` : undefined, fontWeight ? `font-weight-${fontWeight}` : undefined, color ? `text-color-${color}` : undefined)} style={style} href={href} />
    )
}