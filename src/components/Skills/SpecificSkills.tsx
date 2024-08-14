import { Skill as SkillType } from "@/types/skills.types";
import Skill from "@/components/Skills/Skill";

const SpecificSkills = ({
  skills,
  title,
}: {
  skills: SkillType[];
  title: string;
}) => {
  return (
    <div className="px-4 w-96 max-w-[calc(100vw_-_2rem)]">
      <h4 className="uppercase font-bebas tracking-8 text-3xl text-white text-center">
        {title}
      </h4>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
        {skills.map((skill, i) => (
          <Skill skill={skill} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SpecificSkills;
