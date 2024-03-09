import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import UserToDos from "./pages/userToDos/UserToDos";
import { useSelector } from "react-redux";
import EditProfile from "./components/auth/EditProfile";

function App() {
  const userInfo = useSelector((state) => state.auth.userInfo);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={!userInfo ? <SignIn /> : <Navigate to="/" />}
          path="/signin"
        />
        <Route
          element={!userInfo ? <SignUp /> : <Navigate to="/" />}
          path="/signup"
        />
        <Route
          element={userInfo ? <EditProfile /> : <Navigate to="/" />}
          path="/settings/:id"
        />
        <Route
          element={userInfo ? <UserToDos /> : <Navigate to="/" />}
          path="/todos/:id"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
