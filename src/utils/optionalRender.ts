import { ReactElement } from "react"

export function optionalRender(condition: boolean, component: ReactElement) {
    return condition ? component : null
}