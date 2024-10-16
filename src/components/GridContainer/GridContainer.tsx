import { PropsWithChildren } from "react"
import { Props } from "../../@types/Props"
import { classNames } from "../../utils/classNames"
import "./GridContainer.css"

export default function GridContainer({ children, className, id, onClick, style }: PropsWithChildren<Props>) {
    return (
        <div children={children} className={classNames(className, "grid-container")} id={id} onClick={onClick} style={style} />
    )
}