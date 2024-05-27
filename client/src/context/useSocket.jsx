import React, { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { hostUri } from "../fetch";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(hostUri);
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);
  const emitUserConnected = (userId) => {
    socket.emit("user-connected", { userId });
  };
  return (
    <SocketContext.Provider value={{ socket, emitUserConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
