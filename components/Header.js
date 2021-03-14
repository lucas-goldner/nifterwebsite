import React from "react";
import Logo from "../components/Logo";
import HeaderConfig from "../config/HeaderConfig";
import HeaderContainer from "../container/HeaderContainer";

const HeaderFullPage = () => {
  return (
    <HeaderContainer
      logoVersion={"light"}
      transparent={true}
      sticky={true}
      classes="header-bar header-fixed-150"
    >
      <div className="header-left">
        <Logo logo={"./img/nifterLogo.png"} />
      </div>

      <div className="header-right">
        <HeaderConfig />
      </div>
    </HeaderContainer>
  );
};

export default HeaderFullPage;
