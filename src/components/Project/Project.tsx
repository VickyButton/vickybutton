import { PropsWithChildren } from "react"
import { Props } from "../../@types/Props"
import { classNames } from "../../utils/classNames"
import { optionalRender } from "../../utils/optionalRender"
import FlexContainer from "../FlexContainer/FlexContainer"
import ImageContainer from "../ImageContainer/ImageContainer"
import Subheading from "../Subheading/Subheading"
import "./Project.css"

export interface ProjectProps extends Props {
    title: string
    src?: string
}

export default function Project({ children, className, title, src }: PropsWithChildren<ProjectProps>) {
    return (
        <FlexContainer className={classNames(className, "project")} direction="column">
            <Subheading color="B">{title}</Subheading>
            {optionalRender(src != undefined, <ImageContainer src={src!} />)}
            {children}
        </FlexContainer>
    )
}