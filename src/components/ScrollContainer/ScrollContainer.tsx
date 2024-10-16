import { PropsWithChildren } from "react"
import { classNames } from "../../utils/classNames"
import FlexContainer, { FlexContainerProps } from "../FlexContainer/FlexContainer"
import "./ScrollContainer.css"

export default function ScrollContainer(props: PropsWithChildren<FlexContainerProps>) {
    return (
        <FlexContainer {...props} className={classNames(props.className, "scroll-container")} />
    )
}