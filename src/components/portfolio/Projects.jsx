import Tip from "./Tip";
import Officelite from "./Officelite";
import Maker from "./Maker";
import Typemaster from "./Typemaster";
import Github from "./Github";
import Art from "./Art";
import Suite from "./Suite";
import Time from "./Time";
import Crowdfunding from "./Crowdfunding";

const Projects = () => {
  return (
    <section className="flex flex-col gap-[4.5rem] md:gap-20">
      <Tip />
      <Officelite />
      <Maker />
      <Typemaster />
      <Github />
      <Art />
      <Suite />
      <Time />
      <Crowdfunding />
    </section>
  );
};

export default Projects;
