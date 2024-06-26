import React from "react";
import { Avatar, Card, CardMedia, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomPagination from "./CustomPagination";

const Recommendation = () => {
  const recommendations = [
    {
      id: 1,
      title:
        "What are some examples of hyper-localized customer acquisition strategies for D2C brands?",
      author: "Sona Aggarwal",
      role: "Global Brand Builder",
      timeAgo: "2 days ago",
      description:
        "Hyper-localized customer acquisition strategies focus on deeply understanding and catering to the specific needs and preferences of a local market. For D2C (Direct-to-Consumer) brands, this approach can be highly effective in building...",
      videoDuration: "5:33",
      views: 10,
      likes: 8,
      imgSrc: "./assets/VideoImg.png",
    },
  ];

  return (
    <div className="p-4 my-[46px] w-[1100px] rounded-md">
      <div className="mb-9 text-2xl font-semibold">
        We recommend you to go through these articles or answers provided by
        domain leaders.
      </div>
      {recommendations.map((rec) => (
        <Card
          key={rec.id}
          className="flex flex-col gap-6 items-center sm:flex-row p-6 border-[#D8D8D8] rounded-xl"
        >
          <div className="relative">
            <CardMedia
              component="img"
              sx={{ width: 200, height: 260, borderRadius: 4 }}
              image={rec.imgSrc}
              alt={rec.author}
              className="relative"
            />
            <div className="absolute inset-0 flex gap-8 items-end justify-center bg-opacity-50 text-white">
              <IconButton size="large" color="inherit" className="text-white">
                <img src="./assets/PlayIcon.png" alt="PlayIcon" width={52} />
              </IconButton>
              <IconButton size="medium" color="inherit" className="text-white h-[80px]">
                <p className="text-2xl">{rec.videoDuration}</p>
              </IconButton>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="text-[#0F1242] text-3xl font-bold mb-5">
              {rec.title}
            </div>

            <div className="text-[#626B76] mb-2">ANSWERED BY</div>

            <div className="flex items-center mb-2">
              <Avatar
                alt={rec.author}
                src={rec.imgSrc}
                sx={{ width: 24, height: 24 }}
              />
              <p className="ml-1 font-semibold text-base">{rec.author}</p>
              <p className="ml-3 text-[#5F5F5F]">{rec.role}</p>
              <p className="ml-3 text-[#5F5F5F]">{rec.timeAgo}</p>
            </div>

            <div className="text-[#3D3D3D] text-lg font-semibold mb-2">
              {rec.description}
            </div>

            <div className="flex items-center mt-2">
              <div className="flex justify-center items-center">
                <VisibilityIcon
                  variant="outlined"
                  fontSize="small"
                  className="mr-1"
                />
                <p variant="body2" className="mr-4">
                  {rec.views} Views
                </p>
              </div>

              <div className="flex justify-center items-center">
                <FavoriteIcon
                  variant="outlined"
                  fontSize="small"
                  className="mr-1"
                />
                <p variant="body2">{rec.likes} Likes</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
      <CustomPagination count={4} />
    </div>
  );
};

export default Recommendation;
