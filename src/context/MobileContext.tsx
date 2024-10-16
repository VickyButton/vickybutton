import { createContext, PropsWithChildren, useState } from "react"

const MOBILE_BREAKPOINT = 800

interface MobileContextState {
    isMobile: boolean
    setIsMobile: (isMobile: boolean) => void
}

export const MobileContext = createContext<MobileContextState>({
    isMobile: false,
    setIsMobile: (isMobile: boolean) => { }
})

export default function MobileContextProvider({ children }: PropsWithChildren) {
    const [isMobileState, setIsMobileState] = useState(window.innerWidth <= MOBILE_BREAKPOINT)
    const setIsMobile = (isMobile: boolean) => setIsMobileState(isMobile)

    window.addEventListener("resize", () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT))

    return (
        <MobileContext.Provider children={children} value={{ isMobile: isMobileState, setIsMobile }} />
    )
}