import React from "react";
import Link from "next/link";

const Logo = ({ logo }) => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
