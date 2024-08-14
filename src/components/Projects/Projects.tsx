import ScrollInto from "@/utils/ScrollInto";
import { findIndexInSections } from "@/utils/utils";
import Title from "@/components/Title";
import Link from "next/link";
import { PROJECTS } from "@/lib/const";
import Card from "@/components/Projects/Card";

const SECTION_NAME = "Projects";

const Projects = () => {
  return (
    <ScrollInto index={findIndexInSections(SECTION_NAME)}>
      <Title className="pt-12 md:pt-24">{SECTION_NAME}</Title>
      <p className="max-w-2xl px-4 mx-auto text-white pb-12 text-lg font-rubik mt-12">
        Here are some of my personal projects, you can find more on{" "}
        <Link
          href="https://github.com/PolySim"
          className="text-primary-100 underline after:content-[''] after:block after:h-px after:bg-red-300 after:w-fit"
        >
          my github
        </Link>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-11/12 max-w-5xl mx-auto pb-48">
        {PROJECTS.map((project, i) => (
          <Card index={i} project={project} key={i} />
        ))}
      </div>
    </ScrollInto>
  );
};

export default Projects;
