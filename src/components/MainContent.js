import React from "react";
import "tailwindcss/tailwind.css";
import ExpertSection from "./ExpertSection";
import RelatedQuestions from "./RelatedQuestions";
import Recommendation from "./Recommendation";
import ProblemStatement from "./ProblemStatement";

const MainContent = () => {
  return (
    <div className="mainBodyContainer relative top-[90px]">
      {/* Wizely default prompt & response */}
      <div>
        <ProblemStatement />
      </div>

      {/* Horizontal Divider */}
      <div className="w-full flex justify-center">
        <div className="w-1/2 border-t-[1px] border-gray-300"></div>
      </div>

      {/* Reccomendation Section */}
      <div className="flex justify-center items-center">
        <Recommendation />
      </div>

      {/* Expert Setion */}
      <div>
        <ExpertSection />
      </div>

      {/* Like/Dislike & Share Section */}
      <div>
        <div className="py-[78px] flex justify-center items-center gap-5">
          <div>
            <img
              src="./assets/LikeIcon.png"
              alt="like"
              width={66}
              height={68}
            />
          </div>
          <div>
            <img
              src="./assets/dislikeIcon.png"
              alt="dislike"
              width={66}
              height={68}
            />
          </div>
          <div>
            <img
              src="./assets/ShareIcon.png"
              alt="share"
              width={151}
              height={77}
            />
          </div>
        </div>
      </div>

      {/* Related Topics & Questions Section */}
      <div>
        <RelatedQuestions />
      </div>
    </div>
  );
};

export default MainContent;
