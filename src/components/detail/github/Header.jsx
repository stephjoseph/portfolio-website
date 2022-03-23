import mobileHeroImg from "../../../images/detail/mobile/image-github-hero.jpg";
import tabletHeroImg from "../../../images/detail/tablet/image-github-hero.jpg";
import desktopHeroImg from "../../../images/detail/desktop/image-github-hero.jpg";

const Header = () => {
  return (
    <header className="mb-8 md:mb-10 md:mt-[2.938rem] xl:mb-[7.188rem]  xl:mt-10">
      <div className="flex flex-col gap-10">
        <div>
          <img className="md:hidden" src={mobileHeroImg} alt="" />
          <img
            className="hidden md:block xl:hidden"
            src={tabletHeroImg}
            alt=""
          />
          <img className="hidden xl:block" src={desktopHeroImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
