import { NavLink, useNavigate } from 'react-router-dom'
import './navigation-bar.css'

export default function NavigationBar() {

    const navigate = useNavigate()

    return (
        <>
            <nav>
                <NavLink to="/characters" className="navigation-item">Characters</NavLink>
                <NavLink to="/about" className="navigation-item">About Us</NavLink>
                <button onClick={() => navigate(-1)} >Back</button>
            </nav>
        </>
    )
}