import Header from "./components/portfolio/Header";
import Main from "./components/portfolio/Main";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="grid w-full place-items-center bg-[#FAFAFA] font-['Public_Sans']"
    >
      <Header />
      <Main />
    </div>
  );
};

export default Portfolio;
