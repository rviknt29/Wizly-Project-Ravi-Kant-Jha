import React from "react";
import { AppBar } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      color=""
      elevation={0}
      className="h-[90px] bg-white flex justify-center items-center border-b-2 !shadow-md shadow-gray-400 md:h-[90px] sm:h-[60px]"
    >
      <div className="h-[70px] flex w-[95%] justify-between md:h-[70px] sm:h-[50px]">
        <img
          src="./assets/headerImg.png"
          alt="Wizly"
          className="w-full h-[65px] md:h-[65px] sm:h-[45px]"
        />
      </div>
    </AppBar>
  );
};

export default Header;
