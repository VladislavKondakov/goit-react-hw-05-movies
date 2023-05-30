import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"

export const Layout = () => {
    return (
    <div>
        <nav>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="movie">Colection</NavLink>
            </nav>
            <Suspense>
                <Outlet />
                </Suspense>
        </div>
        )
}