import logo from './mylogo.png';
import './App.css';
import NavBar from "./routes/navigation";
import {Link} from "react-router-dom";
import Features from "./sections/Features";
import BlogSection from "./sections/BlogSection";

function App() {
  return (
    <>
      <NavBar />
      <header className={"App-header"}>
        <div className={"container-fluid"}>
          <div className={"row justify-content-center align-items-center page-height"}>
            <div className={"col-md-12 text-center"}>
              <img src={logo} className={"w-40"} alt="React Web Designs"/>
              <h1 className={"text-white fw-bold"}>
                  Sites Powered With
                  <span className={"text-success p-2 text-decoration-underline"}>JavaScript</span>
              </h1>
              <Link className={"btn btn-success me-2 rounded-pill"} to={"/"}>Get Started</Link>
              <Link className={"btn btn-outline-success me-2 rounded-pill"} to={"/about"}>About Me</Link>
            </div>
          </div>
        </div>
      </header>
      <section className={"container my-5 py-4"}>
        <Features />
        <BlogSection />
      </section>
    </>
  );
}

export default App;
