import ScrollInto from "@/utils/ScrollInto";
import { findIndexInSections } from "@/utils/utils";
import TextReveal from "@/components/magicui/text-reveal";
import { CATCH_PHRASE } from "@/lib/const";

const SECTION_NAME = "About me";

const AboutMe = () => {
  return (
    <ScrollInto index={findIndexInSections(SECTION_NAME)}>
      <TextReveal className="text-white" text={CATCH_PHRASE} />
      <div className="space-y-4 max-w-2xl px-4 mx-auto text-white pb-48 text-lg font-rubik">
        <h5 className="font-bebas -tracking-tighter text-3xl md:text-4xl mb-8">
          Hello, I&apos;m Simon 👋
        </h5>
        <p>
          Currently an engineering student at Polytech Lille, I quickly started
          to learn <span className="text-linear">fullstack development</span> on
          my own.
        </p>
        <p>
          Since 2023 I&apos;ve been{" "}
          <span className="text-linear">freelancing</span>, taking on a series
          of assignments that have enabled me to develop a number of{" "}
          <span className="text-linear">skills</span>.
        </p>
        <p>
          I&apos;m currently working for{" "}
          <span className="text-linear">Faire Savoir</span> as a part-time
          student on various assignments
        </p>
      </div>
    </ScrollInto>
  );
};

export default AboutMe;
