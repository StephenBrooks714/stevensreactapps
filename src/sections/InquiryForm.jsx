export default function Inquiry(){
    return (
        <>
            <div className={"my-5 py-3 row justify-content-center align-items-center"}>
                <div className={"col-lg-10"}>
                    <h4 className={"h1 mb-4"}>Inquiry Form</h4>
                    <form action="#">
                        <label htmlFor="name" className={"form-label"}>Name</label>
                        <input type="text" name={"name"} className={"form-control mb-3"} required />
                        <label htmlFor="email" className={"form-label"}>Email</label>
                        <input type="email" name={"email"} className={"form-control mb-3"} required />
                        <label htmlFor="message" className={"form-label"}>Message</label>
                        <textarea name="message" id="message" className={"form-control mb-3"} rows="7" required></textarea>
                        <button className={"btn btn-primary"}>submit form</button>
                    </form>
                </div>
            </div>
        </>
    )
}