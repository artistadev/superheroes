import NavigationItem from "./navigation-item"
import './navigation-bar.css'

export default function NavigationBar() {
    return (
        <>
            <div className="navigation-bar">
                <span className="navigation-item">
                    <NavigationItem menuItemName="Character" />
                </span>

                <span className="navigation-item">
                    <NavigationItem menuItemName="About Us" />
                </span>
            </div>

        </>
    )
}