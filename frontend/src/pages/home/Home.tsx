import { useSelector } from "react-redux";
import Hero from "../../components/hero/Hero";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(`/todos/${user.id}`);
    }

    console.log(user);
  }, [user]);
  return <Hero />;
};
export default Home;
