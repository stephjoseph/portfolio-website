import Header from "./Header";
import Main from "./main";

const Home = () => {
  return (
    <div
      id="home"
      className="grid w-full place-items-center overflow-x-hidden bg-[#FAFAFA] font-['Public_Sans']"
    >
      <Header />
      <Main />
    </div>
  );
};

export default Home;
