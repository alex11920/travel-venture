import { BiSearch } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const navLinks = (
    <>
      <Link
        to="/"
        className="btn btn-ghost text-white font-medium text-base mx-4 hover:bg-[#FFFFFF33]"
      >
        News
      </Link>
      <Link
        to="/blogs"
        className="btn btn-ghost text-white font-medium text-base mx-4 hover:bg-[#FFFFFF33]"
      >
        Destination
      </Link>
      <Link
        to="/blogs"
        className="btn btn-ghost text-white font-medium text-base mx-4 hover:bg-[#FFFFFF33]"
      >
        Blog
      </Link>
      <Link
        to="/blogs"
        className="btn btn-ghost text-white font-medium text-base mx-4 hover:bg-[#FFFFFF33]"
      >
        Contact
      </Link>{" "}
    </>
  );
  const mbLinks = (
    <>
      <Link to="/" className="text-black font-medium text-base">
        News
      </Link>
      <Link to="/blogs" className="text-black font-medium text-base">
        Destination
      </Link>
      <Link to="/blogs" className="text-black font-medium text-base">
        Blog
      </Link>
      <Link to="/blogs" className="text-black font-medium text-base">
        Contact
      </Link>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar my-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {mbLinks}
            </ul>
          </div>
          {/* logo */}
          <Link to="/" className="text-3xl font-bold">
            <img src="/src/assets/icons/logo.png" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex lg:items-center">
          <label className="input input-bordered bg-[#FFFFFF33] border-white text-white w-96 flex items-center gap-2 mr-6">
            <BiSearch className="text-xl" />
            <input
              type="text"
              className="grow"
              placeholder="Search your Destination..."
            />
          </label>
          {navLinks}
        </div>
        <div className="navbar-end gap-8">
          <Link to="/login">
            <button className="btn btn-ghost flex items-center back-yellow font-medium text-base">
              Login{" "}
              <span className="text-2xl">
                <FiArrowUpRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
