import { atom } from "jotai";

export type ChatMessage = {
  id: string;
  text: string;
  from: "me" | "bot";
  createAt: string;
};

// 개발이 끝나면 삭제
const mockMessage: ChatMessage[] = [
  {
    id: "id",
    text: "hello",
    from: "bot",
    createAt: "2025. 11. 3. 오후 4:31:39",
  },
];

export const MessagesAtom = atom<ChatMessage[]>(mockMessage);
