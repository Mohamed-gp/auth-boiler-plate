const Hero = () => {
  return (
    <div
      className="container flex justify-center items-center"
      style={{ height: "calc(100vh - 55.89px)" }}
    >
      <div className="text-center flex flex-col gap-2 border-2 py-12 rounded-xl bg-blue-950/80 text-white px-8 border-black">
        <p className="font-bold text-xl">MERN TO-DO-App</p>
        <p className="opacity-50">
          This to-do app helps you manage your tasks using Redux for state
          management on the frontend, alongside the MERN stack
        </p>
      </div>
    </div>
  );
};
export default Hero;
