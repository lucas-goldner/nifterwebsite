import React from "react";
import Logo from "./elements/logo";
import HeaderConfig from "../config/HeaderConfigTwo";
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
        <Logo logo={"./brook-black.png"} />
      </div>

      <div className="header-right">
        <HeaderConfig />
      </div>
    </HeaderContainer>
  );
};

export default HeaderFullPage;
