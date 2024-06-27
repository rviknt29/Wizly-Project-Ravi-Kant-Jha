import React from "react";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const ChatInput = () => {
  return (
    <div className="fixed bottom-0 left-0 bg-white w-full px-4 sm:px-20 md:px-40 py-4 sm:pb-6 shadow-md">
      <div className="flex items-center bg-[#ECECEC] border rounded-lg py-2 px-3 sm:px-4">
        <input
          type="text"
          placeholder="Ask Wizly..."
          className="flex-grow bg-[#ECECEC] border-none outline-none h-10 text-sm sm:text-lg"
        />
        <AttachFileIcon className="text-gray-500 mr-1 sm:mr-2" />
        <SendIcon className="text-gray-500 ml-1 sm:ml-2" />
      </div>
    </div>
  );
};

export default ChatInput;
