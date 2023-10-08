import NavBar from "../routes/navigation";
export default function SinglePost(){
    return (
        <>
            <NavBar />
            <section className="mb-8 position-relative">
                <div className={"postBg"}>
                    <div className={"container"}>
                        <div className={"row justify-content-center align-items-center post-height"}>
                            <div className={"col-lg-6 col-md-10"}>
                                <div className={"opacity-50 card p-3"}>
                                    <h1>Post Title</h1>
                                    <p>
                                        <strong>Posted By</strong> Stephen Brooks <br/>
                                        <i>Posted On 03/11/2023</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row mt-4 justify-content-center align-items-center"}>
                    <div className={"col-md-10"}>
                        <p className={"lead"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquid amet, commodi cum cupiditate dolor earum fuga id magni maiores, natus, odit optio quisquam soluta sunt tenetur voluptas voluptate?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consectetur corporis cupiditate distinctio dolores eius eos et eveniet explicabo facere labore laudantium modi, molestias nesciunt perferendis ratione reprehenderit sint!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}