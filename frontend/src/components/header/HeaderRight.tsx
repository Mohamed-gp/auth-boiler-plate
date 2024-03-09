import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../../utils/request";
import { toast } from "react-toastify";
import { authActions } from "../../redux/slices/authSlice";

const HeaderRight = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutHandler = async () => {
    try {
      await request.post("/auth/logout");
      dispatch(authActions.logOut());
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="flex gap-4">
      {userInfo && (
        <>
          <div className="flex gap-1">
            <Link to={`/todos/${userInfo?.id}`}>todos</Link>
          </div>
          <div className="flex gap-1">
            <Link to={`/settings/${userInfo?.id}`}>Settings</Link>
          </div>
          <div
            className="flex gap-1 cursor-pointer"
            onClick={() => logOutHandler()}
          >
            <p>Logout</p>
          </div>
        </>
      )}

      {!userInfo && (
        <>
          <div className="flex gap-1">
            <Link to="/signin">Sign In</Link>
          </div>
          <div className="flex gap-1">
            <Link to="/signup">Sign Up</Link>
          </div>
        </>
      )}
    </div>
  );
};
export default HeaderRight;
