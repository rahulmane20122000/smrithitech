import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/landing-page/landing-page"
import PATH from "./paths"

const routeConfig = createBrowserRouter([{
    path:PATH.HOME,
    element: <LandingPage/>
}],{basename:'/'})

export default routeConfig