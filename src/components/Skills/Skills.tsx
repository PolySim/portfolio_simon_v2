import ScrollInto from "@/utils/ScrollInto";
import { findIndexInSections } from "@/utils/utils";
import SpecificSkills from "@/components/Skills/SpecificSkills";
import { SKILLS } from "@/lib/const";

const SECTION_NAME = "Skills";

const Skills = () => {
  return (
    <ScrollInto index={findIndexInSections(SECTION_NAME)}>
      <h3 className="font-bebas text-5xl md:text-7xl tracking-12 text-white mt-12 md:mt-24 text-center">
        {SECTION_NAME}
      </h3>
      <div className="flex flex-col md:flex-row gap-24 items-center md:items-start w-fit mx-auto mt-16 mb-48">
        <SpecificSkills skills={SKILLS.frontend} title="Frontend" />
        <SpecificSkills skills={SKILLS.backend} title="Backend" />
      </div>
    </ScrollInto>
  );
};

export default Skills;
