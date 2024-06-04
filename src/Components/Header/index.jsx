import { Link } from "react-router-dom";

export default function Header({ title = 'My Blog' }) {
    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mb-0 h1">{ title }</Link>
            </div>
        </nav>
    );
}
