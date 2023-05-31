import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"

export const Layout = () => {
    return (
    <div>
        <nav>
        <NavLink to="/">Colection</NavLink>
        <NavLink to="movie">Home Page</NavLink>
            </nav>
            <Suspense>
                <Outlet />
                </Suspense>
        </div>
        )
}