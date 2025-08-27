import { SocialIcons, FooterNavigation, Logo, FooterForm } from "@/components";
import { SOCIAL_MEDIA_LINKS, NAVIGATION_FOOTER } from "@/data/data";

export const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 mx-auto my-auto w-[242px] h-[242px] bg-blue-violet blur-[250px]"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col items-center xl:items-start gap-9">
            <Logo />
            <FooterForm />
          </div>

          <div className="flex flex-col xl:flex-row items-center xl:items-start flex-wrap gap-12">
            {NAVIGATION_FOOTER.map((section) => (
              <FooterNavigation key={section.title} section={section} />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-500 gap-4">
          <p className="text-gray-200 text-sm text-center md:text-left">
            Copyright © Product | Designed by{" "}
            <strong>Webocean LTD</strong> - Powered by{" "}
            <strong>Webflow</strong> - Developed by{" "}
            <strong>DylanSC</strong>
          </p>

          <SocialIcons links={SOCIAL_MEDIA_LINKS} />
        </div>
      </div>
    </footer>
  );
};
