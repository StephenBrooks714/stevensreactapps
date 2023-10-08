import {Link} from "react-router-dom";
import logo from "../logo.png";

export default function NavBar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <Link className={"navbar-brand"} to={"/"}>
                        <img src={logo} className={"logoSize"} alt="logo"/>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <Link className="nav-link" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" to={"/about"}>About</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" to={"/Gallery"}>Gallery</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" to={"/BlogsPage"}>Blogs</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <Link className="nav-link" target={"_blank"} to={"https://www.facebook.com/littlewebber1980"}>
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" target={"_blank"} to={"https://www.linkedin.com/in/stephen-brooks-067075235/"}>
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" target={"_blank"} to={"https://github.com/StephenBrooks714"}>
                                    <i className="fab fa-github"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}