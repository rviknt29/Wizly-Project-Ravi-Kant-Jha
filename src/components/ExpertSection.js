import React from "react";
import { Avatar, Typography } from "@mui/material";

const experts = [
  {
    name: "Eugene Kuznetsov",
    title: "GTM & Product Leader",
    companies: "xApple, xBumble",
    imgSrc: "./assets/Eugine.png",
    flagSrc: "./assets/flag1.png",
  },
  {
    name: "Cristina Cárdaba",
    title: "Enterprise Sales & GTM",
    companies: "xWoffu (Unicorn)",
    imgSrc: "./assets/Cristenia.png",
    flagSrc: "./assets/flag2.png",
  },
  {
    name: "Jesus Llamazares",
    title: "CEO, CxO, Founder",
    companies: "xAccenture, xTelefonica",
    imgSrc: "./assets/Jesus.png",
    flagSrc: "./assets/flag1.png",
  },
];

const ExpertSection = () => {
  return (
    <div className="bg-[#E4F7FF] h-[auto] md:h-[595px] flex flex-col gap-10 justify-center items-center p-6 md:p-0">
      <div className="text-center text-lg md:text-2xl font-semibold">
        Furthermore you can now start talking or engaging with these recommended
        experts to go deeper for the solution on your problem statement.
      </div>
      <div className="flex flex-col md:flex-row gap-7 mt-6 md:mt-10">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center h-[auto] md:h-[399px] w-[auto] md:w-[388px] bg-white rounded-lg shadow-lg p-4"
          >
            <div className="relative inline-block mb-4">
              <Avatar
                alt={expert.name}
                src={expert.imgSrc}
                sx={{ width: 250, height: 250 }}
              />
              <img
                src={expert.flagSrc}
                alt="flag"
                className="absolute top-0 right-0 w-10 h-[30px]"
              />
            </div>
            <Typography
              variant="h5"
              className="mt-2 md:mt-4 font-semibold text-center"
              color="#0F1242"
            >
              {expert.name}
            </Typography>
            <Typography
              variant="subtitle1"
              className="text-center"
              color="#0F1242"
            >
              {expert.title}
            </Typography>
            <Typography variant="body2" className="text-center text-blue-500">
              {expert.companies}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertSection;
