import { PropsWithChildren, useContext } from "react"
import { Props } from "../../@types/Props"
import { ThemeContext } from "../../context/ThemeContext"
import { classNames } from "../../utils/classNames"
import "./Text.css"

export type TextAlign = "L" | "C" | "R"
export type TextFontSize = "S" | "SM" | "M" | "ML" | "L"
export type TextFontWeight = "L" | "LM" | "M" | "MB" | "B"
export type TextColor = "W" | "B"

export interface TextProps extends Props {
    align?: TextAlign
    fontSize?: TextFontSize
    fontWeight?: TextFontWeight
    color?: TextColor
}

export default function Text({ children, className, style, align, fontSize, fontWeight, color }: PropsWithChildren<TextProps>) {
    const { theme } = useContext(ThemeContext)

    return (
        <span children={children} className={classNames(className, "text", align ? `align-${align}` : undefined, fontSize ? `font-size-${fontSize}` : undefined, fontWeight ? `font-weight-${fontWeight}` : undefined, color ? `text-color-${color}` : undefined)} style={style} />
    )
}