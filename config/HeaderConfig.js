import React, { useEffect, useState } from "react";

function HeaderConfig() {
  const [body, setBody] = useState();
  const [html, setHTML] = useState();
  useEffect(() => {
    setBody(document.querySelector("body"));
    setHTML(document.querySelector("html"));
  }, []);

  return (
    <div className="header-right have-not-flex pl--35 pl_md--5 pl_sm--5"></div>
  );
}

export default HeaderConfig;
