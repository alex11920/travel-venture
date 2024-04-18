import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero pt-4">
        <div className="py-10 px-16 border rounded-md">
          <div className="text-left pb-8">
            <h1 className="text-2xl font-bold">Login</h1>
          </div>
          <div className="card w-96">
            <form>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered text-sm"
                  required
                />
              </div>
              {/* Password */}
              <div className="form-control pt-2">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Password
                  </span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="password"
                    name="password"
                    className="grow text-sm"
                    placeholder="Password"
                  />
                  {/* <span>
                    {showPassword ? (
                      <IoEyeOffOutline className="text-xl" />
                    ) : (
                      <IoEyeOutline className="text-xl" />
                    )}
                  </span> */}
                </label>
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt font-medium yellow text-sm link link-hover pt-2"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* button */}
              <div className="form-control mt-6">
                <button className="btn back-yellow">Login</button>
              </div>

              {/* sign up button */}
              <p className="text-center pt-6 font-medium">
                Don’t have an account?{"  "}
                <Link to="/register">
                  <span className="label-text-alt font-medium yellow text-sm link link-hover pt-2">
                    Create an account
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="divider text-center font-bold py-4 w-96">Or</div>
        </div>
        {/* more button */}
        <div className="flex justify-center">
          <div className="flex flex-col gap-2">
            <button className="btn btn-ghost border border-[#C7C7C7] px-40 rounded-full flex items-center gap-4 hover:bg-[#f9a51a]">
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>
            <button className="btn btn-ghost border border-[#C7C7C7] px-40 rounded-full flex items-center gap-4 hover:bg-[#f9a51a]">
              <RxGithubLogo className="text-2xl" />
              Continue with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
