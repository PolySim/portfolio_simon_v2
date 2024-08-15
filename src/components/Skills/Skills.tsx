import ScrollInto from "@/utils/ScrollInto";
import { findIndexInSections } from "@/utils/utils";
import SpecificSkills from "@/components/Skills/SpecificSkills";
import { SKILLS } from "@/lib/const";
import Title from "@/components/Title";

const SECTION_NAME = "Skills";

const Skills = () => {
  return (
    <ScrollInto index={findIndexInSections(SECTION_NAME)}>
      <Title className="pt-12 md:pt-24">{SECTION_NAME}</Title>
      <div className="flex flex-col md:flex-row gap-24 items-center md:items-start w-fit mx-auto mt-16 pb-48">
        <SpecificSkills skills={SKILLS.frontend} title="Frontend" />
        <SpecificSkills skills={SKILLS.backend} title="Backend" />
      </div>
    </ScrollInto>
  );
};

export default Skills;
