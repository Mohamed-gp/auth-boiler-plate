import { Link } from "react-router-dom";

const HeaderRight = () => {
  return (
    <div className="flex gap-4">
      <div className="flex gap-1">
        <Link to="/todos/65e7e55a0f6b81483b8c6ef1">todos</Link>
      </div>
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
