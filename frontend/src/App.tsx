import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import UserToDos from "./pages/userToDos/UserToDos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignIn />} path="/signin" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<UserToDos />} path="/todos/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
