import ScrollInto from "@/utils/ScrollInto";
import { findIndexInSections } from "@/utils/utils";
import FormContact from "@/components/Contact/FormContact";
import SocialLink from "@/components/Contact/SocialLink";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const SECTION_NAME = "Contact";

const Contact = () => {
  return (
    <ScrollInto index={findIndexInSections(SECTION_NAME)}>
      <div className="w-screen min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-11/12 max-w-5xl mx-auto mt-12 lg:mt-24">
          <FormContact />
          <div className="row-start-1 w-full space-y-8 h-fit lg:mt-12">
            <p className="font-bebas tracking-wider text-7xl text-white uppercase">
              A request ?
            </p>
            <p className="relative font-bebas tracking-wider text-7xl text-linear uppercase w-fit">
              Contact me !
              <span className="bg-linear-blur" />
            </p>
            <div className="flex gap-12 mt-6">
              <SocialLink link="https://github.com/PolySim">
                <Github size={24} />
              </SocialLink>
              <SocialLink link="https://www.instagram.com/simondesdevises/?hl=fr">
                <Instagram />
              </SocialLink>
              <SocialLink link="https://x.com/jsuiSim">
                <Twitter />
              </SocialLink>
              <SocialLink link="https://www.linkedin.com/in/simon-desdevises-ab11071a8/">
                <Linkedin />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </ScrollInto>
  );
};

export default Contact;
