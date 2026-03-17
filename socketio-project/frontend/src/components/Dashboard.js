import { useEffect } from "react";
import { socket } from "../services/socket";

function Dashboard() {
  useEffect(() => {
    // Connect socket
    socket.connect();

    // Events
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
    });

    socket.on("connect_error", (err) => {
      console.log("Error:", err.message);
    });

    // Cleanup
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");

      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Socket.io Connected ✅</p>
    </div>
  );
}

export default Dashboard;