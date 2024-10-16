import { PropsWithChildren, useContext } from "react"
import { Props } from "../../@types/Props"
import { ThemeContext } from "../../context/ThemeContext"
import { classNames } from "../../utils/classNames"
import "./Button.css"

export type ButtonVariant = "default" | "action"

export interface ButtonProps extends Props {
    variant: ButtonVariant
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
    const { theme } = useContext(ThemeContext)

    return (
        <button {...props} className={classNames(props.className, "button", props.variant, theme == "dark" ? "dark-mode" : undefined)} />
    )
}