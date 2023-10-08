import NavBar from "../routes/navigation";
export default function Gallery(){
    return (
        <>
            <NavBar />
            <section className={"space-top"}>
                <div className={"container my-5 py-5"}>
                    <h1 className={"letter-space display-4 mb-5"}>
                        My Previous Projects
                    </h1>
                    <div className="lightbox">
                        <div className="row">
                            <div className="col-lg-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg"
                                     data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg" alt="Lightbox image 1"
                                     className="w-100 shadow-1-strong rounded" />
                            </div>
                            <div className="col-lg-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(48).jpg"
                                     data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(48).jpg" alt="Lightbox image 2"
                                     className="w-100 shadow-1-strong rounded" />
                            </div>
                            <div className="col-lg-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg"
                                     data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg" alt="Lightbox image 3"
                                     className="w-100 shadow-1-strong rounded" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(44).jpg"
                                     data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(44).jpg" alt="Lightbox image 1"
                                     className="w-100 shadow-1-strong rounded" />
                            </div>
                            <div className="col-lg-4 mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(41).jpg"
                                     data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(41).jpg" alt="Lightbox image 2"
                                     className="w-100 shadow-1-strong rounded" />
                            </div>
                            <div className="col-lg-4">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(47).jpg"
                                     data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(47).jpg" alt="Lightbox image 3"
                                     className="w-100 shadow-1-strong rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}