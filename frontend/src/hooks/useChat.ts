import { Id } from "@core";
import useLocalStorage from "./useLocalStorage";
import Message from "@/model/Message";
import chat from "@/functions/chat";
import { useState } from "react";

export default function useChat() {
  const [chatId] = useLocalStorage<string>("chatId", Id.generate());
  const [messages, setMessages] = useLocalStorage<Message[]>(
    "chatMessages",
    []
  );
  const [thinking, setThinking] = useState(false);

  async function addMessage(text: string) {
    try {
      setThinking(true);
      const newMessage: Message = {
        id: Id.generate(),
        text,
        author: "Visitor",
        side: "right"
      };

      setMessages((msgs) => [...msgs, newMessage]);

      const reply = await chat(chatId, newMessage);

      if (!reply) return;

      const replyMessage: Message = {
        id: Id.generate(),
        text: reply,
        author: "Assistant",
        side: "left"
      };

      setMessages((msgs) => [...msgs, replyMessage]);
    } finally {
      setThinking(false);
    }
  }

  function clearMessages() {
    setMessages([]);
  }

  return {
    chatId,
    messages,
    thinking,
    addMessage,
    clearMessages
  };
}
