import { useRouteError } from "react-router-dom";
import "./App.css";
import NavBar from "./routes/navigation";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <NavBar />
            <div className={"container space"}>
                <div className={"row row-cols-lg-auto text-center justify-content-center align-items-center d-flex mx-auto"}>
                    <div className={"col-md-10"}>
                        <div id="error-page">
                            <h1>Oops!</h1>
                            <p>Sorry, an unexpected error has occurred.</p>
                            <p>
                                <i>{error.statusText || error.message}</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}