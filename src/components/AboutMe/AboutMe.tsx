import ScrollInto from "@/utils/ScrollInto";
import { findIndexInSections } from "@/utils/utils";

const SECTION_NAME = "About me";

const AboutMe = () => {
  return (
    <ScrollInto index={findIndexInSections(SECTION_NAME)}>
      <div className="h-screen"></div>
    </ScrollInto>
  );
};

export default AboutMe;
