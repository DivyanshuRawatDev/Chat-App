import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white opacity-90">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          Login
          <span className="text-blue-300 ml-3">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base lable-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-slate-200"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lable-text">Password</span>
            </label>
            <input
              type="Password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-slate-200"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div className=" bg-blue-500 text-white btn btn-block btn-sm mt-2">
            Login
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
