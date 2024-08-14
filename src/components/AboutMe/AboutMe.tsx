import ScrollInto from "@/utils/ScrollInto";
import { findIndexInSections } from "@/utils/utils";
import TextReveal from "@/components/magicui/text-reveal";
import { CATCH_PHRASE } from "@/lib/const";

const SECTION_NAME = "About me";

const AboutMe = () => {
  return (
    <ScrollInto index={findIndexInSections(SECTION_NAME)}>
      <TextReveal className="text-white" text={CATCH_PHRASE} />
    </ScrollInto>
  );
};

export default AboutMe;
