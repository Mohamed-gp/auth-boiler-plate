import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../redux/slices/userSlice";

const HeaderRight = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4">
      {user && (
        <div className="flex gap-1">
          <Link to={`/todos/${user?._id}`}>todos</Link>
        </div>
      )}
      {!user && (
        <>
          <div className="flex gap-1">
            <Link to="/signin">Sign In</Link>
          </div>
          <div className="flex gap-1">
            <Link to="/signup">Sign Up</Link>
          </div>
        </>
      )}
      {user && (
        <>
          <div
            className="flex gap-1 cursor-pointer"
            onClick={() => dispatch(authActions.logOut())}
          >
            <p>Logout</p>
          </div>
        </>
      )}
    </div>
  );
};
export default HeaderRight;
