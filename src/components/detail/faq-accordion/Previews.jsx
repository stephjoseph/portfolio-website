import mobilePreview1 from "../../../images/detail/mobile/image-faq-preview-1.jpg";
import tabletPreview1 from "../../../images/detail/tablet/image-faq-preview-1.jpg";
import desktopPreview1 from "../../../images/detail/desktop/image-faq-preview-1.jpg";
import mobilePreview2 from "../../../images/detail/mobile/image-faq-preview-2.jpg";
import tabletPreview2 from "../../../images/detail/tablet/image-faq-preview-2.jpg";
import desktopPreview2 from "../../../images/detail/desktop/image-faq-preview-2.jpg";

const Previews = () => {
  return (
    <section class="flex flex-col gap-10 xl:gap-[1.75rem]">
      <h2 class="font-['Ibarra_Real_Nova'] text-[2rem] font-normal leading-[2.625rem] tracking-[-0.29px] text-[#33323D]">
        Static Previews
      </h2>
      <div class="flex flex-col gap-8 md:gap-0">
        <div>
          <img class="md:hidden" src={mobilePreview1} alt="" />
        </div>
        <div class="hidden md:mb-8 md:block">
          <img class="hidden md:block xl:hidden" src={tabletPreview1} alt="" />
          <img class="hidden xl:block" src={desktopPreview1} alt="" />
        </div>
        <div>
          <img class="md:hidden" src={mobilePreview2} alt="" />
          <img class="hidden md:block xl:hidden" src={tabletPreview2} alt="" />
          <img class="hidden xl:block" src={desktopPreview2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Previews;
