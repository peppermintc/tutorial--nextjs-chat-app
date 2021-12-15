import React, { useContext, useEffect, useState } from "react";
import { ChatEngine, MessageFormSocial } from "react-chat-engine";
import { Context } from "../context";
import { useRouter } from "next/router";

export default function Chats() {
  const [showChat, setShowChat] = useState(false);
  const { username, secret } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("/");
  });

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID="f31190c1-18d9-4039-aafe-ce15718d80bc"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}
