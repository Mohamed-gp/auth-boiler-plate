import { Link } from "react-router-dom";

const HeaderRight = () => {
  return (
    <div className="flex gap-4">
      <div className="flex gap-1">
        <Link to="/signin">Sign In</Link>
      </div>
      <div className="flex gap-1">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};
export default HeaderRight;
