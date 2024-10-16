import { PropsWithChildren } from "react"
import { Props } from "../../@types/Props"
import { classNames } from "../../utils/classNames"
import "./FlexContainer.css"

export type FlexContainerDirection = "column" | "row"
export type FlexContainerAlignItems = "start" | "center" | "end"
export type FlexContainerJustifyContent = "space-between" | "space-around" | FlexContainerAlignItems

export interface FlexContainerProps extends Props {
    direction?: FlexContainerDirection
    alignItems?: FlexContainerAlignItems
    justifyContent?: FlexContainerJustifyContent
}

export default function FlexContainer({ children, className, id, style, direction, alignItems, justifyContent, onClick }: PropsWithChildren<FlexContainerProps>) {
    return (
        <div children={children} className={classNames(className, "flex-container", direction, alignItems ? `align-items-${alignItems}` : undefined, justifyContent ? `justify-content-${justifyContent}` : undefined, onClick ? "clickable" : undefined)} id={id} style={style} onClick={onClick} />
    )
}