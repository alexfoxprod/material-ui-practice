import React from "react";
import HeaderCss from "./Header.module.css";

function Header() {
  return (
    <header className="card">
      <h1>Main title</h1>
      <button className={HeaderCss.btn}>Add now</button>
    </header>
  );
}

export default Header;
