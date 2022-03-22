import Header from "./home/Header";
import Main from "./home/Main";

const Home = () => {
  return (
    <div
      id="home"
      className="grid w-full place-items-center bg-[#FAFAFA] font-['Public_Sans']"
    >
      <Header />
      <Main />
    </div>
  );
};

export default Home;
