// components/Chat.js
import { useState } from 'react';

function Chat() {
  // State for storing messages and the current input value
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to handle sending a message
  const handleSend = () => {
    if (input.trim() === '') return; // Ignore empty messages

    // Create a new message object
    const newMessage = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    // Update the messages state with the new message
    setMessages([...messages, newMessage]);
    setInput(''); // Clear the input field
  };

  return (
    <div 
    className="container my-4 p-5" 
    style={{ 
      backgroundColor: '#f0f8ff', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
    }}
  >
    <h2 className="mb-4 text-center text-dark">Chat Interface</h2>
    <div className="card mb-3" style={{ borderRadius: '10px', overflow: 'hidden' }}>
      <div 
        className="card-body" 
        style={{ 
          height: '300px',
          overflowY: 'auto', 
          backgroundColor: '#e9f7fe'
        }}
      >
        {messages.length === 0 ? (
          <p className="text-muted text-center">No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <strong className="text-primary">{msg.sender}:</strong>
              <span className="ms-2">{msg.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
    <div className="input-group">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-control"
        placeholder="Type your message..."
      />
      <button onClick={handleSend} className="btn btn-primary">
        Send
      </button>
    </div>
  </div>
);
}

export default Chat;
