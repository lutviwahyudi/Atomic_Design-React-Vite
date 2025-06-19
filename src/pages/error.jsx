import React from 'react';
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
            <p className="text-lg mt-1">Something went wrong 😵</p>
            <p className="mt-4 text-gray-600">{error.statusText || error.message}</p>
            <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">
                ← Back to Home
            </Link>
        </div>
    );
}

export default ErrorPage;