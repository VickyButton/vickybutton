import { Props } from "../../@types/Props"
import { classNames } from "../../utils/classNames"
import FlexContainer from "../FlexContainer/FlexContainer"
import "./ImageContainer.css"

export interface ImageContainerProps extends Props {
    src: string
    alt?: string
    lazyLoad?: boolean
}

export default function ImageContainer({ className, id, onClick, src, alt, lazyLoad }: ImageContainerProps) {
    return (
        <FlexContainer className={classNames(className, "image-container")} id={id} onClick={onClick}>
            <img {...{ alt, src }} loading={lazyLoad ? "lazy" : "eager"} />
        </FlexContainer>
    )
}