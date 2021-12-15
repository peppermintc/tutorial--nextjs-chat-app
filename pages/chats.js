import React, { useContext, useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import { Context } from "../context";

export default function Chats() {
  const [showChat, setShowChat] = useState(false);
  const { username, secret } = useContext(Context);

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
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
        />
      </div>
    </div>
  );
}
