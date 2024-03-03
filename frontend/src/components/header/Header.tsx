import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <header className="bg-blue-950/70 text-white font-bold">
      <div className="container flex justify-between py-4 ">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
};
export default Header;
