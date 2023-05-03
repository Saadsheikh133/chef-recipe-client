/* eslint-disable no-unused-vars */
import { useRouteError } from "react-router-dom";
import err from '../../assets/images/error-404.jpg';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex justify-center items-center h-screen text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" id="error-page">
            <div className="relative text-white">
                <img className="rounded-lg" src={err} alt="" />
                <div className="absolute  right-0 top-0 left-0">
                    <h1 className="text-6xl font-bold mb-2">Oops!</h1>
                    <p className="text-4xl font-bold">Sorry, an unexpected error has occurred.</p>
                    <p className="text-3xl font-bold">
                        <i>{error.statusText || error.message}</i>
                    </p>
               </div>
            </div>
        </div>
    );
}