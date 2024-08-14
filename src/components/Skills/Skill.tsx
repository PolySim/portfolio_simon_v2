import { Skill as SkillType } from "@/types/skills.types";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Skill = ({ skill }: { skill: SkillType }) => {
  return (
    <div className="group">
      <div
        data-content={skill.title}
        className={cn(
          "flex justify-center items-center rounded-full relative size-[120px] cursor-pointer group-hover:scale-90 transition duration-200 skill-box-after group-hover:md:after:-translate-x-1/2 group-hover:md:after:translate-y-1/2 group-hover:md:after:opacity-100 after:content-[attr(data-content)]",
        )}
        style={{
          background: skill.background_linear,
        }}
      >
        <div className="skill-box-img w-[60%] h-[60%] flex justify-center items-center">
          <Image
            src={skill.image_src}
            alt={skill.title}
            width={43}
            height={43}
            className="max-w-[60%] max-h-[60%] object-contain"
          />
        </div>
        <Link
          href={skill.doc_url}
          className="absolute top-0 left-0 size-full opacity-30 blur-2xl"
          style={{ background: skill.background_linear }}
        />
      </div>
    </div>
  );
};

export default Skill;
