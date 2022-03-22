import Tip from "./Tip";
import Officelite from "./Officelite";
import Maker from "./Maker";
import Typemaster from "./Typemaster";
import Github from "./Github";
import Art from "./Art";
import Suite from "./Suite";
import Time from "./Time";
import Crowdfunding from "./Crowdfunding";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Equalizer from "./Equalizer";
import Meet from "./Meet";
import Pod from "./Pod";
import FAQ from "./FAQ";

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
      <Pricing />
      <Testimonials />
      <Equalizer />
      <Meet />
      <Pod />
      <FAQ />
    </section>
  );
};

export default Projects;
