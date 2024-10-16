import { PropsWithChildren } from "react"
import { Props } from "../../@types/Props"
import { classNames } from "../../utils/classNames"
import Text from "../Text/Text"

export default function Heading(props: PropsWithChildren<Props>) {
    return (
        <Text {...props} className={classNames(props.className, "heading")} fontSize="L" fontWeight="B" />
    )
}