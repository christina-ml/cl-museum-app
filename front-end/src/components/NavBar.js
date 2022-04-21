import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-light" bg="light" expand="lg">
            <Link to="/">
                <h2>
                    <img height="30" className="d-inline-block align-top" src="https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/DCTM_Penguin_UK_DK_AL503037_j4wz4v.jpg" alt="fossil" />
                    <span>Dinosaur Museum</span>
                </h2>
            </Link>
            <Link to="/dinosaurs" className="navbar-brand">
                <button type="button" className="btn btn-outline-light">
                    All Dinosaurs
                </button>
            </Link>
        </nav>
    )
}

export default NavBar;