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
    <div className="bg-[#E4F7FF] h-[595px] flex flex-col gap-10 justify-center items-center">
      <div className="w-[1100px] h-[82px] text-2xl font-semibold">
        Furthermore you can now start talking or engaging with these recommended
        experts to go deeper for the solution on your problem statement.
      </div>
      <div className="flex gap-7">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center h-[399px] w-[388px]"
          >
            <div className="relative inline-block">
              <Avatar
                alt={expert.name}
                src={expert.imgSrc}
                sx={{ width: 250, height: 250 }}
              />
              <img
                src={expert.flagSrc}
                alt="flag"
                className="absolute top-5 right-5 w-10 h-[30px]"
              />
            </div>
            <Typography
              variant="h5"
              className="mt-4 font-semibold"
              color="#0F1242"
            >
              {expert.name}
            </Typography>
            <Typography variant="subtitle1" color="#0F1242">
              {expert.title}
            </Typography>
            <Typography variant="body2" color="#7A5CFF">
              {expert.companies}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertSection;
