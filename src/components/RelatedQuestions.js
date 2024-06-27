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
    <div className="w-full max-w-[764px] mx-auto md:ml-[300px] md:w-[764px]">
      <Typography variant="subtitle1" className="mb-2 text-gray-600">
        RELATED TOPICS/ QUESTIONS
      </Typography>
      <List className="flex flex-col gap-5">
        {questions.map((question, index) => (
          <ListItem
            key={index}
            className={`py-2 rounded-lg px-4 md:px-[30px] ${
              index === 0 ? "bg-[#F6F7FF]" : ""
            }`}
          >
            <ListItemIcon>
              <img src="./assets/Arrow.png" alt="arrow" className="w-6 h-6" />
            </ListItemIcon>
            <ListItemText
              primary={question}
              primaryTypographyProps={{
                className: "text-[#3D3D3D] text-lg md:text-2xl",
              }}
              className="rounded-md text-lg md:text-2xl"
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RelatedQuestions;
