import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"
import { HeaderNav } from "./filmsgallery.styled"
import "./styles.css"

export const Layout = () => {
    return (
    <div>
        <HeaderNav>
        <NavLink to="/" className="header_link">Colection</NavLink>
        <NavLink to="movie" className="header_link">Home Page</NavLink>
            </HeaderNav>
            <Suspense>
                <Outlet />
                </Suspense>
        </div>
        )
}