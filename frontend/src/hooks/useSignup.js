import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    userName,
    password,
    confirmpassword,
    gender,
  }) => {
    const sucess = handleInputErrors({
      fullName,
      userName,
      password,
      confirmpassword,
      gender,
    });

    if (!sucess) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmpassword,
          gender,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      //LocalStorage:-
      localStorage.setItem("chat-user", JSON.stringify(data));
      // Context:-
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

function handleInputErrors({
  fullName,
  userName,
  password,
  confirmpassword,
  gender,
}) {
  if ((!fullName, !userName, !password, !confirmpassword, !gender)) {
    toast.error("Please fill in all fields.");
  }

  if (password !== confirmpassword) {
    toast.error("Password do not match.");
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
  }

  return true;
}

export default useSignup;
