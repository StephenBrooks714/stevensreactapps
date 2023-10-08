import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import ErrorPage from "./error-page";
import About from "./pages/About";
import SinglePost from "./sections/singlePost";
import Blogs from "./sections/BlogsPage";
import Gallery from "./sections/GalleryPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/singlePost",
        element: <SinglePost />,
    },
    {
        path: "/BlogsPage",
        element: <Blogs />,
    },
    {
        path: "/Gallery",
        element: <Gallery />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);