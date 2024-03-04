import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <header className="font-bold text-white bg-mainColor">
      <div className="container flex justify-between py-4 ">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
};
export default Header;
