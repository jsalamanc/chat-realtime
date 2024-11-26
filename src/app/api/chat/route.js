import { Server } from "socket.io"


export default function SocketHandler(_req, res) {
    if (res.socket.server.io) {
        res.end();
        return;
    }
    const io = new Server(res.socket.server);

    // Event handler for client connections
    io.on("connection", (socket) => {
        const clientId = socket.id;
        console.log(`client connected. ID: ${clientId}`);
        // Event handler for receiving messages from the client
        socket.on("message", (data) => {
            console.log("Received message From Client:", data);
        });

        // Event handler for client disconnections
        socket.on("disconnect", () => {
            console.log("client disconnected.");
        });
    });

    // Monkey patching to access socket instance globally.
    io = io
    res.socket.server.io = io;
    res.end();



    res.send({})
}