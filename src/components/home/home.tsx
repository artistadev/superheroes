import NavigationBar from "../navigation/navigarion-bar"
import { Outlet } from "react-router";

import "./home.css"

export default function Home() {
    return (
        <>
            <div>
                <div className="navigation-bar">
                    <NavigationBar />
                </div>
                <div className="top-carousel">
                    Here comes the top carousel (css required)
                </div>
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}