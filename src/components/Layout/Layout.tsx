import { useContext, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { MobileContext } from "../../context/MobileContext"
import title from "../../data/title"
import FlexContainer from "../FlexContainer/FlexContainer"
import Screen from "../Screen/Screen"
import "./Layout.css"

export default function Layout() {
    const { isMobile } = useContext(MobileContext)
    const { pathname, hash, key } = useLocation()

    useEffect(() => {
        document.title = title
    }, [])

    return (
        <Screen>
            <FlexContainer className="layout" direction="column" alignItems="center">
                <div id="background" />
                <main>
                    <Outlet />
                </main>
            </FlexContainer>
        </Screen>
    )
}