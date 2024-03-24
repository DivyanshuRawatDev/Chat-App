import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white opacity-90">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          SignUp
          <span className="text-blue-300 ml-3">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base lable-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10 bg-slate-200"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lable-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
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
          <div>
            <label className="label p-2">
              <span className="text-base lable-text">Confirm Password</span>
            </label>
            <input
              type="Password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-slate-200"
            />
          </div>

          {/* GENDER CHEKBOX */}
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div className=" bg-blue-500 text-white btn btn-block btn-sm mt-2">
            SignUp
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

