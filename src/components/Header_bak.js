import React from "react";
import {
  AppBar,
  Typography,
  Button,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      color=""
      elevation={0}
      className="shadow-lg h-[90px] bg-white flex justify-center items-center"
    >
      <div className="h-[80px] flex w-[95%] justify-between">
        <div className="flex">
          {/* Logo part */}
          <Typography variant="h6" className="flex-grow items-center flex">
            <img
              src="./assets/wizly_logo.svg"
              alt="Wizly"
              className="inline-block h-[44px] w-[140px]"
            />
          </Typography>

          {/* Buttons in header */}
          <div className="flex">
            <Button color="inherit" className="text-gray-700">
              Product
            </Button>
            <Button color="inherit" className="text-gray-700">
              Community
            </Button>
            <Button color="inherit" className="text-gray-700">
              Blog
            </Button>
            <Button color="inherit" className="text-gray-700">
              Company
            </Button>
          </div>
        </div>

        {/* Signin buttons section*/}
        <div className="flex gap-4 h-[45px]">
          <Button
            variant="outlined"
            color="primary"
            className="ml-2 border-blue-500 text-blue-500"
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="ml-2 bg-blue-500"
          >
            Get Started
          </Button>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
