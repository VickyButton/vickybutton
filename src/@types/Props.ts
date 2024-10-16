import { CSSProperties } from "react"

export interface Props {
    className?: string
    id?: string
    style?: CSSProperties
    onClick?: () => void
}