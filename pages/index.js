// pages/index.js
import { useEffect } from "react";
import { db } from "../firebase/firebase";
import Chat from "../components/chat"; 

export default function HomePage() {
  useEffect(() => {
    console.log("Firestore DB instance:", db);
  }, []);

  return (
    <div className="jumbotron text-center "
    style={{ minHeight: '100vh' }}>
      <h1>Welcome to My Finance Chatbot</h1>
      <Chat />
    </div>
  );
}
