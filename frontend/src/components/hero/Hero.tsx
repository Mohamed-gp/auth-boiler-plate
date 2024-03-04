const Hero = () => {
  return (
    <div
      className="container flex items-center justify-center"
      style={{ height: "calc(100vh - 55.89px)" }}
    >
      <div className="flex flex-col gap-2 px-8 py-12 text-center text-white border-2 border-black rounded-xl bg-mainColor">
        <p className="text-xl font-bold">MERN TO-DO-App</p>
        <p className="opacity-50">
          This to-do app helps you manage your tasks using Redux for state
          management on the frontend, alongside the MERN stack
        </p>
      </div>
    </div>
  );
};
export default Hero;
