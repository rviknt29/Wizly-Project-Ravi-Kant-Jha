import React from "react";

const ProblemStatement = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center md:justify-between pl-4 md:pl-52">
      {/* Main Content */}
      <div className="w-full md:w-4/5 rounded-lg mb-8 md:mb-0">
        {/* Problem Statement */}
        <div className="my-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="./assets/WizlyShadow.png"
              alt="userIcon"
              width={40}
              height={40}
              className="md:ml-[-40px]"
            />
            <p className="text-xl md:text-2xl font-semibold">Wizly AI</p>
          </div>

          <div className="bg-[#E4F7FF] rounded-lg p-4 md:p-7">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-6">
                <img
                  src="./assets/BulbIcon.png"
                  alt="BulbIcon"
                  width={60}
                  height={60}
                />
                <h6 className="text-xl md:text-2xl font-semibold">
                  Problem Statement
                </h6>
              </div>
              <img
                src="./assets/CopyIcon.png"
                alt="CopyIcon"
                width={36}
                height={36}
              />
            </div>
            <p className="text-base md:text-lg font-semibold italic">
              We have a successful organic skincare product targeted at women in
              the US and want to expand internationally. We are unsure how to
              adapt our go-to-market strategy for different countries with
              varying cultural preferences, regulations, and distribution
              channels. Our initial target markets are the UK, Germany, and
              Scandinavia.
            </p>
          </div>
        </div>
        {/* Answer Summary */}
        <div className="bg-white rounded-lg mb-8 md:mb-0">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="./assets/WizlyShadow.png"
              alt="userIcon"
              width={40}
              height={40}
              className="md:ml-[-40px]"
            />
            <p className="text-xl md:text-2xl font-semibold">
              Wizly AI - Answer Summary
            </p>
          </div>

          <p className="text-base md:text-lg mb-6">
            Expanding your US-based organic skincare product to the UK, Germany,
            and Scandinavian countries involves navigating various challenges
            and leveraging different strategies. Our verified experts suggest
            you go through the following steps:
          </p>

          <div>
            <p className="text-base md:text-lg text-[#626B76] mb-2">
              Verified Sources:
            </p>
            <div className="mb-4 flex flex-col md:flex-row gap-7 text-[#3D3D3D]">
              {[
                { name: "Filip Galetic", avatar: "./assets/Filip.png" },
                { name: "Sona Aggarwal", avatar: "./assets/Sona.png" },
                { name: "Arvinder Gujral", avatar: "./assets/Arvinder.png" },
                { name: "Lisa Schneider", avatar: "./assets/Lisa.png" },
              ].map((expert, index) => (
                <div key={index} className="flex items-center mb-2 md:mb-0">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    alt={expert.name}
                    src={expert.avatar}
                  />
                  <p className="text-base">{expert.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="text-base md:text-lg">
            <h6 className="font-semibold mb-2">
              1. Regulatory and Labelling Requirements
            </h6>
            <p className="mb-6">
              In Europe, there are stringent regulations regarding labelling and
              ingredient disclosure for skincare products. For example, in the
              EU, you must list the percentage of different ingredients on
              separate spreadsheets accompanying shipped orders. A regulatory
              body called a 'responsible person' can guide you through these
              requirements.
              <span className="font-semibold underline">
                {" "}
                Filip Galetic{" "}
              </span>{" "}
              explains this in his article below.
            </p>

            <h6 className="font-semibold mb-2">
              2. Consumer Preferences and Product Standards
            </h6>
            <p className="mb-6">
              Consumer preferences and product standards vary significantly
              between the US and Europe. In the EU, known carcinogens and
              endocrine disruptors are often not allowed in personal care
              products, unlike in the US. This leads to 'cleaner' products which
              are more attractive to European consumers. Listen to
              <span className="font-semibold underline">
                {" "}
                Sona Aggarwal’s{" "}
              </span>{" "}
              answer to this.
            </p>

            <h6 className="font-semibold mb-2">
              3. Local Production and Sustainability
            </h6>
            <p className="mb-6">
              In terms of production and distribution, a local approach can
              significantly benefit your operations. This involves sourcing raw
              materials and manufacturing locally, which not only supports the
              local economy but also aligns with sustainable practices. A
              successful model considers local community conditions, sourcing
              local raw materials, and engaging in sustainable practices.
            </p>

            <h6 className="font-semibold mb-2">
              4. Building Brand and Customer Base
            </h6>
            <p className="mb-6">
              When entering new markets, it is crucial to build a brand and
              develop loyal, referenceable customers before expecting
              significant scale and growth. Deploying customer success and
              marketing teams first in the new market to build a brand presence
              is a recommended strategy. Patience and a localized approach are
              key to gaining market acceptance.
            </p>

            <h6 className="font-semibold mb-2">
              5. Legal and Cultural Complexities
            </h6>
            <p className="mb-6">
              Each country has its specific legal and cultural intricacies that
              affect how you market and talk about your products. Understanding
              these nuances is critical to successfully adapt and thrive in new
              markets.
            </p>
            <p>
              By carefully considering these aspects, you can better strategize
              your market entry and expansion while minimizing risks and
              maximizing opportunities for growth.
            </p>
          </div>
        </div>
      </div>
      {/* Vertical Line */}
      <div className="md:border-l-[1px] md:border-[#D8D8D8] md:h-[600px] md:mt-10 md:mx-3 border-collapse h-0"></div>
      {/* Side Panel */}
      <div className="w-full md:w-1/5 bg-white rounded-lg pt-8 pr-3">
        <h6 className="text-base md:text-lg font-semibold mb-2 text-[#626B76]">
          Today
        </h6>
        <div className="mb-2 p-2 font-semibold bg-[#F5F6FF] cursor-pointer rounded">
          Global Go-to-market strategy...
        </div>
        <hr className="mb-2"></hr>
        <div className="mt-1 p-2 font-semibold hover:bg-gray-100 cursor-pointer rounded">
          Effective communication for...
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
