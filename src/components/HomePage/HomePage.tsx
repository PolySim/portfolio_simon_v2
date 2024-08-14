import Meteors from "@/components/magicui/meteors";
import WindowSizeContainer from "@/utils/WindowSizeContainer";
import ScrollDown from "@/components/HomePage/ScrollDown";
import ScrollInto from "@/utils/ScrollInto";

const HomePage = () => {
  const METEORS_MAX_WIDTH = 1024;

  return (
    <ScrollInto index={0}>
      <div className="flex flex-col gap-8 justify-center items-center relative min-h-screen w-screen text-center font-bebas tracking-12">
        <p className="text-4xl md:text-5xl px-12 text-transparent text-stroke-primary z-10">
          Welcome on my portfolio, I am
        </p>
        <p className="text-linear text-8xl md:text-9xl uppercase z-10">Simon</p>
        <WindowSizeContainer minWidth={METEORS_MAX_WIDTH}>
          <Meteors number={30} />
        </WindowSizeContainer>
        <ScrollDown />
      </div>
    </ScrollInto>
  );
};

export default HomePage;
