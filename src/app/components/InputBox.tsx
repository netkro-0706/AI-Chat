"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { MessagesAtom, type ChatMessage } from "../store/Messages";

const InputBox = () => {
  const [value, setValue] = useState("");
  const [lang, setLang] = useState("ko-KR");
  const setMessages = useSetAtom(MessagesAtom);
  // 채팅 로그 확인용
  const chatLog = useAtomValue(MessagesAtom);
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  const start = () => listen({ lang, interimResults: true, continuous: true });

  // 채팅 로그 확인용
  useEffect(() => {
    console.log("chatLog", chatLog);
  }, [chatLog]);

  const OnSubmit = () => {
    if (value === "") return;
    const message: ChatMessage = {
      id: crypto.randomUUID(),
      text: value,
      from: "me",
      createAt: new Date().toLocaleString("ko-KR"),
    };
    setMessages((prev) => [...prev, message]);
    setValue("");
  };

  return (
    <div className="flex items-center">
      <div className="border rounded w-fit p-1">
        <input
          type="text"
          className="border-none outline-none focus:outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") OnSubmit();
          }}
        />
        <select
          className="mr-1"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="ko-KR">한국어</option>
          <option value="en-US">English</option>
          <option value="ja-JP">日本語</option>
        </select>
        <button onClick={!listening ? start : stop}>
          <i
            className={`fa-solid fa-microphone  px-1 py-1 rounded-full hover:cursor-pointer
              ${listening ? "bg-green-500" : "bg-gray-300"}`}
          ></i>
        </button>
        <button
          type="button"
          className="bg-gray-300 ml-1 pr-1 pl-1 rounded hover:cursor-pointer"
          onClick={OnSubmit}
        >
          Enter
        </button>
      </div>
      {listening && <span className="ml-2">Recording...</span>}
    </div>
  );
};

export default InputBox;
