import WindowSizeContainer from "@/utils/WindowSizeContainer";
import HeaderDesktop from "@/components/Header/HeaderDesktop/HeaderDesktop";

const Header = () => {
  const LIMIT_WIDTH = 1024;

  return (
    <>
      <WindowSizeContainer minWidth={LIMIT_WIDTH}>
        <HeaderDesktop />
      </WindowSizeContainer>
    </>
  );
};

export default Header;
