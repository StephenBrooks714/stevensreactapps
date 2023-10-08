import '../App.css';
import NavBar from "../routes/navigation";

function About() {
    return (
        <>
            <NavBar />
            <div className={"container mb-8"}>
                <section className="mb-8 aboutSection">
                    <div className="card rounded-6 shadow-3-soft cardBg">
                        <div className="row g-0 d-flex align-items-center">
                            <div className="col-lg-6 col-xl-5">
                                <img src="https://mdbootstrap.com/img/new/standard/people/270.jpg"
                                     alt="Author" className="w-100 rounded-t-2-5 rounded-tr-lg-0 rounded-bl-lg-2-5"/>
                            </div>
                            <div className="col-lg-6 col-xl-7">
                                <div className="card-body py-4 py-md-5 py-lg-4 py-xl-5 px-md-5">
                                    <div className="border-top border-dark"></div>
                                    <p className="display-4 mt-5 mb-4 aboutBg">About me</p>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                        magni dolores eos qui ratione voluptatem.
                                    </p>
                                    <p className="mb-4 pb-2">
                                        Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis
                                        malesuada. Aenean gravida magna orci, non efficitur est porta id. Donec magna
                                        diam.
                                    </p>
                                    <a className="btn btn-lg btn-dark" href="#" role="button">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;