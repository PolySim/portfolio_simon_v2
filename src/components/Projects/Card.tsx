import { Project } from "@/types/projects.types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Apparition from "@/components/Projects/Apparition";

const Card = ({ project, index }: { project: Project; index: number }) => {
  return (
    <Apparition index={index}>
      <div className="bg-white p-4 rounded-lg overflow-hidden w-full max-w-lg mx-auto">
        <h6 className="font-bebas -tracking-tighter pb-4 text-xl">
          {project.name}
        </h6>
        <Image
          src={project.imgPath}
          alt={project.name}
          width={200}
          height={200}
          className="w-full h-52 object-cover rounded"
        />
        <div className="grid grid-cols-2 gap-4 pt-4">
          {project.sourceCodePath && (
            <Button variant="outline" asChild>
              <Link href={project.sourceCodePath}>Source code</Link>
            </Button>
          )}
          {project.demoPath ? (
            <Button asChild>
              <Link href={project.demoPath}>Live demo</Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </Apparition>
  );
};

export default Card;
