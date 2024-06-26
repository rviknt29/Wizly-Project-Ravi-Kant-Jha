import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const questions = [
  "What are the specific EU skincare regulations?",
  "How do skincare preferences in Europe differ?",
  "What are the best practices for local production?",
];

const RelatedQuestions = () => {
  return (
    <div className="w-[764px] h-[291px] ml-[300px]">
      <Typography variant="subtitle1" className="mb-2 text-gray-600">
        RELATED TOPICS/ QUESTIONS
      </Typography>
      <List className="flex flex-col gap-5">
        {questions.map((question, index) => (
          <ListItem
            key={index}
            className={`py-2 rounded-[15px] px-[30px] ${
              index === 0 ? "bg-[#F6F7FF]" : ""
            }`}
          >
            <ListItemIcon>
              <img src="./assets/Arrow.png" alt="arrow" />
            </ListItemIcon>
            <ListItemText
              primary={question}
              primaryTypographyProps={{ className: "text-[#3D3D3D] text-2xl" }}
              className="rounded-md text-2xl"
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RelatedQuestions;
