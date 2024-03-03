import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container">
      <form action="" className="flex flex-col">
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
      </form>
      <div className="flex gap-2">
        <p>Dont Have An Account?</p>
        <Link to="/signup">Sign-Up</Link> 
      </div>
    </div>
  );
};
export default SignIn;
