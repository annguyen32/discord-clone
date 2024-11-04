"use client";

import { useState } from "react";
import { api } from "../../convex/_generated/api";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  const messages = useQuery(api.functions.message.list);
  const createMessage = useMutation(api.functions.message.create);
  const [input, setInput] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createMessage({ sender: "Alice", content: input });
    setInput("");
  };
  return (
    <div>
      {messages?.map((messages, index) => (
        <div key={index}>
          <strong>{messages.sender}</strong> : {messages.content}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="messgage"
          id="message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"> Send </button>
      </form>
    </div>
  );
}
