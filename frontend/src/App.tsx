import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import UserToDos from "./pages/userToDos/UserToDos";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.auth.user)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={user ? <Home /> : <SignIn />}
          path="/signin"
        />
        <Route
          element={user ? <Home /> : <SignUp />}
          path="/signup"
        />
        <Route element={user ? <UserToDos /> : <Home/>} path="/todos/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
