import { PropsWithChildren } from "react"
import { classNames } from "../../utils/classNames"
import Text, { TextProps } from "../Text/Text"

export default function Subheading(props: PropsWithChildren<TextProps>) {
    return (
        <Text {...props} className={classNames(props.className, "subheading")} fontSize="ML" fontWeight="B" />
    )
}