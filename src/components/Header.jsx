import React from "react";
import Typical from "react-typical";

function Header() {
  return (
    <header>
      <h1 className="tc f1 appTitle washed-blue mb3 ">
        <Typical
          steps={["Rondom", 1000, "Robot App!", 1500]}
          loop={Infinity}
          wrapper="b"
        />
      </h1>
    </header>
  );
}

export default Header;
