import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = async (e: Event) => {
    e.preventDefault()
    const dataToSubmit = {email,password,username}
    try {
      const {data} = await axios.post("http://localhost:8080/signup",dataToSubmit)
      console.log(data)
    } catch (error) {
      console.log(error)
      
    }
  }
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
        <p className="text-center">SignUp</p>
        <div className="flex flex-col w-[300px]">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="py-1 pl-4 mt-1 text-black border rounded-lg focus:outline-none"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
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
            value="SignUp"
            className="px-3 py-1 mx-auto mt-3 font-bold bg-white text-mainColor rounded-xl"
          />
        </div>
      </form>
      <div className="flex gap-2">
        <p>Already have an Account?</p>
        <Link to="/signup">Sign-In</Link>
      </div>
    </div>
  );
};
export default SignUp;
