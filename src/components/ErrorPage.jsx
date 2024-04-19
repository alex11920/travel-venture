import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";

const ErrorPage = () => {
  return (
    <div className="bg-white h-screen">
      <Navbar></Navbar>
      <div className="text-center mt-72">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-3xl pt-6 pb-2 font-semibold yellow">Not Found</p>
        <p className="grey">
          the resource requested could not be found on this server!
        </p>
        <span className="flex justify-center pt-6">
          <Link to="/">
            <button className="btn btn-ghost flex items-center back-yellow font-medium text-base">
              <span className="text-2xl">
                <FiArrowLeft />
              </span>
              Back to home{" "}
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ErrorPage;
