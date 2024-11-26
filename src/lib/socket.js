import { io } from "socket.io-client";

const socket = io({
    path: "/api/chat", // Asegúrate de que coincida con el servidor
});

export default socket;