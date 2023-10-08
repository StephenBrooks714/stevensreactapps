import {Link} from "react-router-dom";
import NavBar from "../routes/navigation";
export default function Blogs(){
    return (
        <>
            <NavBar />
            <div className={"space-top"}></div>
            <section className="mb-7 mt-5 container">
                <p className="fs-1 fw-bold text-center mb-5">Read the latest in...</p>
                <div className="
                      d-flex
                      justify-content-between
                      align-items-center align-items-xl-end
                      border-bottom
                      mb-5
                ">
                </div>
                <div className="row gx-md-5">
                    <div className="col-md-12 col-lg-4">
                        <div className="mb-5 mb-lg-0">
                            <div className="bg-image hover-overlay hover-zoom ripple rounded-5 mb-4" data-mdb-ripple-color="light">
                                <img className="w-100 rounded-5 fit" src="https://mdbootstrap.com/img/new/blog/16.jpg"
                                     alt="Image placeholder" />
                                <Link to={"/singlePost"}>
                                    <div className="mask bg"></div>
                                </Link>
                            </div>
                            <h6 className="text-muted text-uppercase small pb-1">
                                <Link to={"/singlePost"} className="text-reset">Photography</Link>
                            </h6>
                            <h5 className="fw-bold mb-3">
                                <Link to={"/singlePost"} className="text-reset">Non-obvious nature - selected photographs May 2022</Link>
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="mb-5 mb-lg-0">
                            <div className="bg-image hover-overlay hover-zoom ripple rounded-5 mb-4" data-mdb-ripple-color="light">
                                <img className="w-100 rounded-5 fit2" src="https://mdbootstrap.com/img/new/blog/17.jpg"
                                     alt="Image placeholder" />
                                <Link to={"/singlePost"}>
                                    <div className="mask bg" ></div>
                                </Link>
                            </div>
                            <h6 className="text-muted text-uppercase small pb-1">
                                <Link to={"/singlePost"} className="text-reset">Photography</Link>
                            </h6>
                            <h5 className="fw-bold mb-3">
                                <Link to={"/singlePost"} className="text-reset">How do young people care about climate change and how can adults support
                                    them?
                                </Link>
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div>
                            <div className="bg-image hover-overlay hover-zoom ripple rounded-5 mb-4" data-mdb-ripple-color="light">
                                <img className="w-100 fit rounded-5"
                                     src="https://mdbootstrap.com/img/new/blog/18.jpg"
                                     alt="Image placeholder"
                                />
                                <Link to={"/singlePost"}>
                                    <div className="mask bg"></div>
                                </Link>
                            </div>
                            <h6 className="text-muted text-uppercase small pb-1">
                                <Link to={"/singlePost"} className="text-reset">Photography</Link>
                            </h6>
                            <h5 className="fw-bold mb-3">
                                <Link to={"/singlePost"} className="text-reset">Noble photographic techniques - how can we be inspired by them
                                    today?</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}