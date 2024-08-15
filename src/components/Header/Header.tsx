import WindowSizeContainer from "@/utils/WindowSizeContainer";
import HeaderDesktop from "@/components/Header/HeaderDesktop/HeaderDesktop";
import HeaderMobile from "@/components/Header/HeaderMobile/HeaderMobile";

const Header = () => {
  const LIMIT_WIDTH = 1024;

  return (
    <>
      <WindowSizeContainer maxWidth={LIMIT_WIDTH}>
        <HeaderMobile />
      </WindowSizeContainer>
      <WindowSizeContainer minWidth={LIMIT_WIDTH}>
        <HeaderDesktop />
      </WindowSizeContainer>
    </>
  );
};

export default Header;
