import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const useWebSocketConnectionHook = (cb, event) => {

  const socketRef = useRef(null);
  function socketClient() {
    const socket = io({
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      socket.on(event, (data) => {
        cb(data);
      });
      console.log("Connected");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
    });

    socket.on("connect_error", async (err) => {
      console.log(`connect_error due to ${err.message}`);
      await fetch('/api/chat');
    });


    socketRef.current = socket;
  }

  useEffect(() => {
    socketClient();
    return () => {
      socketRef?.current?.disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


}

export default useWebSocketConnectionHook;