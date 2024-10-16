import { PropsWithChildren } from "react"
import { classNames } from "../../utils/classNames"
import FlexContainer, { FlexContainerProps } from "../FlexContainer/FlexContainer"
import "./Section.css"

export type SectionVariant = "default" | "converge-right" | "converge-right-end" | "converge-left" | "converge-left-end"

export interface SectionProps extends FlexContainerProps {
    variant: SectionVariant
}

export default function Section(props: PropsWithChildren<SectionProps>) {
    return (
        <FlexContainer {...props} className={classNames(props.className, "section", props.variant)} direction="column" alignItems="center" />
    )
}