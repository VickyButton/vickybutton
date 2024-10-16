import { PropsWithChildren } from "react"
import { classNames } from "../../utils/classNames"
import FlexContainer, { FlexContainerProps } from "../FlexContainer/FlexContainer"

export default function ScrollArea(props: PropsWithChildren<FlexContainerProps>) {
    return (
        <FlexContainer {...props} className={classNames(props.className, "scroll-area")} />
    )
}