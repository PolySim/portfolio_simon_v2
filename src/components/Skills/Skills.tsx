import ScrollInto from "@/utils/ScrollInto";
import { findIndexInSections } from "@/utils/utils";

const SECTION_NAME = "Skills";

const Skills = () => {
  return (
    <ScrollInto index={findIndexInSections(SECTION_NAME)}>
      <div></div>
    </ScrollInto>
  );
};

export default Skills;
