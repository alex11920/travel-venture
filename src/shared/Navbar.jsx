import { BiSearch } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <Link to="/" className="btn btn-ghost font-medium text-base mx-4">
        News
      </Link>
      <Link to="/blogs" className="btn btn-ghost font-medium text-base mx-4">
        Destination
      </Link>
      <Link to="/blogs" className="btn btn-ghost font-medium text-base mx-4">
        Blog
      </Link>
      <Link to="/blogs" className="btn btn-ghost font-medium text-base mx-4">
        Contact
      </Link>{" "}
    </>
  );
  const mbLinks = (
    <>
      <Link to="/" className="font-medium text-base">
        News
      </Link>
      <Link to="/blogs" className="font-medium text-base">
        Destination
      </Link>
      <Link to="/blogs" className="font-medium text-base">
        Blog
      </Link>
      <Link to="/blogs" className="font-medium text-base">
        Contact
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 my-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          <a>
            <Link to="/" className="text-3xl font-bold">
              <img src="/src/assets/icons/logo-y.png" />
            </Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex lg:items-center">
          <label className="input input-bordered w-96 flex items-center gap-2 mr-6">
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

export default Navbar;
