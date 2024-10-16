import { PropsWithChildren } from "react"
import { Props } from "../../@types/Props"
import { classNames } from "../../utils/classNames"
import FlexContainer from "../FlexContainer/FlexContainer"
import "./Screen.css"

export default function Screen({ children, className }: PropsWithChildren<Props>) {
    return (
        <FlexContainer children={children} className={classNames(className, "screen")} direction="column" />
    )
}