import { Props } from "../../@types/Props"
import { classNames } from "../../utils/classNames"
import ImageContainer from "../ImageContainer/ImageContainer"
import "./Icon.css"

export type IconVariant = "html" | "css" | "react"

export interface IconProps extends Props {
    variant: IconVariant
    alt?: string
}

export default function Icon({ className, variant, alt }: IconProps) {
    return (
        <ImageContainer alt={alt} src={`/media/icons/${variant}-icon.png`} className={classNames(className, "icon")} />
    )
}