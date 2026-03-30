import React from "react";
import { Link } from "react-router";
import error from "../assets/App-Error.png";

const ErrorPage = () => {
  return (
    <>
      <div className="max-w-screen mx-auto w-full px-5 flex-1 justify-center my-10 flex flex-col items-center">
        <img className="text-center" src={error} alt="" />{" "}
        <h1 className="text-4xl font-bold pb-5">Oops, App is not found!</h1>
        <p>The app you are looking for is not available.</p>
        <div className="mt-10 mx-auto">
          <Link
            to="/"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text- text-white font-bold"
          >
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
