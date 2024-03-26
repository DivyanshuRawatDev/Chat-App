import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();

  const handleCheckboxCheck = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center max-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white opacity-90">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          SignUp
          <span className="text-blue-300 ml-3">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base lable-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10 bg-slate-200"
              value={inputs.fullName}
              onChange={(e) => {
                setInputs({ ...inputs, fullName: e.target.value });
              }}
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
              value={inputs.userName}
              onChange={(e) => {
                setInputs({ ...inputs, userName: e.target.value });
              }}
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
              value={inputs.password}
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
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
              value={inputs.confirmpassword}
              onChange={(e) => {
                setInputs({ ...inputs, confirmpassword: e.target.value });
              }}
            />
          </div>

          {/* GENDER CHEKBOX */}
          <GenderCheckbox
            onCheckboxChange={handleCheckboxCheck}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <button className=" bg-blue-500 text-white btn btn-block btn-sm mt-2">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
