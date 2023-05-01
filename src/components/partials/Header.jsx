import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/aboutus">About Us</Link>
            </p>
        </nav>
    )
}