import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { request } from "../../utils/request";
import { authActions } from "../../redux/slices/authSlice";
import { toDoSliceActions } from "../../redux/slices/toDoSlice";

// import { toDoSliceActions } from "../../redux/slices/toDoSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  // submitHandler
  const submitHandler = async (e: Event) => {
    e.preventDefault();
    const dataToSubmit = {
      email,
      password,
    };
    try {
      const { data } = await request.post(
        "/auth/signin",
        dataToSubmit
      );
      dispatch(authActions.setCredential(data.data));
      dispatch(toDoSliceActions.initToDo(data.data.todos))
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
      return toast.error(error.response.data.message);
    }
  };
  return (
    <div
      className="container flex flex-col items-center justify-center gap-10"
      style={{ height: "calc(100vh - 55.98px)" }}
    >
      <form
        onSubmit={submitHandler}
        action=""
        className="flex flex-col gap-2 w-[400px] text-white rounded-xl p-8 bg-mainColor items-center"
      >
        <p className="text-center">SignIn</p>
        <div className="flex flex-col w-[300px]">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            className="py-1 pl-4 mt-1 text-black border rounded-lg focus:outline-none"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-[300px]">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="py-1 pl-4 mt-1 text-black border rounded-lg focus:outline-none "
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="submit"
            value="SignIn"
            className="px-3 py-1 mx-auto mt-3 font-bold bg-white text-mainColor rounded-xl"
          />
        </div>
      </form>
      <div className="flex gap-2">
        <p>Dont Have An account?</p>
        <Link to="/signup" className="underline opacity-50">
          Sign-Up
        </Link>
      </div>
    </div>
  );
};
export default SignIn;
