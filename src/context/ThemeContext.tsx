import { createContext, PropsWithChildren, useState } from "react"

export type Theme = "light" | "dark"

interface ThemeContextState {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextState>({
    theme: "dark",
    setTheme: (theme: Theme) => { }
})

export default function ThemeContextProvider({ children }: PropsWithChildren) {
    const [themeState, setThemeState] = useState<Theme>("dark")
    const setTheme = (theme: Theme) => setThemeState(theme)

    return (
        <ThemeContext.Provider children={children} value={{ theme: themeState, setTheme }} />
    )
}