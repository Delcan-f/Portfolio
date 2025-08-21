import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
            <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Home</Link>
            <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>About</Link>
            <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Projects</Link>
            <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Contacts</Link>
        </nav>
    );
}

export default Navbar;