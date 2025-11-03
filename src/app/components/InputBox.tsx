"use client";

import { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

const InputBox = () => {
  const [value, setValue] = useState("");
  const { listen, listening, stop, transcript } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <div className="flex items-center">
      <div className="border rounded w-fit p-1">
        <input
          type="text"
          className="border-none outline-none focus:outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={!listening ? listen : stop}>
          <i
            className={`fa-solid fa-microphone  px-1 py-1 rounded-full hover:cursor-pointer
              ${listening ? "bg-green-500" : "bg-gray-300"}`}
          ></i>
        </button>
        <button
          type="button"
          className="bg-gray-300 ml-1 pr-1 pl-1 rounded hover:cursor-pointer"
        >
          Enter
        </button>
      </div>
      {listening && <span className="ml-2">Recording...</span>}
    </div>
  );
};

export default InputBox;
