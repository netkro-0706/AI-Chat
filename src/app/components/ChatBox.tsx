"use client";

import BotMessage from "./atom/BotMessage";
import MyMessage from "./atom/MyMessage";
import { MessagesAtom } from "../store/Messages";
import { useAtomValue } from "jotai";

const ChatBox = () => {
  const messages = useAtomValue(MessagesAtom);
  return (
    <div className="mb-2">
      <div
        className="
      border-2 w-full h-[80vh] px-5 py-2
      flex flex-col-reverse gap-y-2
      overflow-y-auto
      "
      >
        {messages.map((message) => {
          if (message.from === "me") {
            return (
              <MyMessage
                key={message.id}
                message={message.text}
                createAt={message.createAt}
              />
            );
          } else {
            return (
              <BotMessage
                key={message.id}
                message={message.text}
                createAt={message.createAt}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ChatBox;
