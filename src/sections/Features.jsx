import {Link} from "react-router-dom";

export default function Features(){
    return (
        <>
            <h2 className={"text-center letter-space mt-3"}>Simplify Your Content.</h2>
            <div className={"row justify-content-center align-items-center mt-2"}>
                <div className={"col-lg-5 col-md-6 mb-5"}>
                    <h2 className={"mb-2"}>React & Node Apps</h2>
                    <p className={"text-muted"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad,
                        aliquid animi explicabo id impedit molestias obcaecati placeat
                        quam quisquam quos, rem temporibus vitae. Corporis delectus dolor
                        odio sequi ut?
                    </p>
                </div>
                <div className={"col-lg-7 col-md-6 mb-5"}>
                    <img src={"https://i.ibb.co/fG0KQrM/Web-Design-1-99.jpg"}
                         className={"img-fluid"}
                         alt="React & Node Apps"
                    />
                </div>
            </div>
            <div className={"mt-5 row text-center"}>
                <div className={"col-md-3 mb-5"}>
                    <div className={"card p-3 hover-zoom"}>
                        <Link to="#">
                            <h3>Business</h3>
                            <img src={"https://cdn.designbump.com/wp-content/uploads/2021/01/quench-responsive-web-design-laptop-mockup.2.jpg"}
                                 className={"img-fluid"}
                                 alt="React & Node Apps"
                            />
                        </Link>
                    </div>
                </div>
                <div className={"col-md-3 mb-5"}>
                    <div className={"card p-3 hover-zoom"}>
                        <Link to="#">
                            <h3>eCommerce</h3>
                            <img src={"https://www.3dbrandagency.com/wp-content/uploads/2021/06/web-designer-working-on-website-HBKJXNC-min_40.jpeg"}
                                 className={"img-fluid"}
                                 alt="React & Node Apps"
                            />
                        </Link>
                    </div>
                </div>
                <div className={"col-md-3 mb-5"}>
                    <div className={"card p-3 hover-zoom"}>
                        <Link to="#">
                            <h3>Specialties</h3>
                            <img src={"https://tribulant.com/blog/wp-content/uploads/2020/12/web-design-AdobeStock_260516386.jpeg"}
                                 className={"img-fluid"}
                                 alt="React & Node Apps"
                            />
                        </Link>
                    </div>
                </div>
                <div className={"col-md-3 mb-5"}>
                    <div className={"card p-3 hover-zoom"}>
                        <Link to="#">
                            <h3>Agencies</h3>
                            <img src={"https://www.thoughtco.com/thmb/G7ML8YAMHYLgUS_dGMNjJsdXpME=/3864x2577/filters:fill(auto,1)/web-designer-developing-responsive-website-layout-946928244-5bcf7fe246e0fb00513cc772.jpg"}
                                 className={"img-fluid"}
                                 alt="React & Node Apps"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"row flex-row-reverse mt-5 mb-7 justify-content-center align-items-center mt-2"}>
                <div className={"col-lg-5"}>
                    <h3 className={"display-2 fw-bold"}>Designs & Development With Choosing React</h3>
                </div>
                <div className={"col-lg-7"}>
                    <img src={"https://www.pngmart.com/files/7/Web-Design-Download-PNG-Image.png"}
                         className={"img-fluid"}
                         alt="React & Node Apps"
                    />
                </div>
            </div>
        </>
    )
}