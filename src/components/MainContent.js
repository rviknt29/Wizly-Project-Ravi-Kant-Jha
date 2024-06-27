import React from "react";
import ExpertSection from "./ExpertSection";
import RelatedQuestions from "./RelatedQuestions";
import Recommendation from "./Recommendation";
import ProblemStatement from "./ProblemStatement";

const MainContent = () => {
  return (
    <div className="mainBodyContainer relative top-[90px]">
      {/* Wizely default prompt & response */}
      <div className="mb-8">
        <ProblemStatement />
      </div>

      {/* Horizontal Divider */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-1/2 border-t-[1px] border-gray-300"></div>
      </div>

      {/* Recommendation Section */}
      <div className="flex justify-center mb-8">
        <Recommendation />
      </div>

      {/* Expert Section */}
      <div className="mb-8">
        <ExpertSection />
      </div>

      {/* Like/Dislike & Share Section */}
      <div className="flex justify-center items-center mb-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
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
