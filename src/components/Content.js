import React from "react";
import style from "./Content.module.css";

function Content() {
  return (
    <div className="card">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sunt.
      </p>
      <button className={style.btn}>Read more</button>
    </div>
  );
}

export default Content;
