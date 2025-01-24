import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";


export default function Characters() {

    const [search, setSearch] = useState("")
    const navigateTo = useNavigate()

    return (
        <>
            <div className="top-carousel">
                Here comes the top carousel (css required)
            </div>

            <div>
                <input type="text" placeholder="Search for a character" onChange={(e) => { setSearch(e.target.value) }} value={search} />
                <button onClick={() => navigateTo(`/characters/${search}`)} >
                    <i className="fas fa-search"></i> Search
                </button>
            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}