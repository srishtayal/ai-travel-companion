import React, { useState } from 'react';
import { askTravelAI } from './api';
import { LucidePlane, Paperclip, Image } from 'lucide-react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([
    { fromUser: false, text: "👋 Hi, I'm your travel companion! Ask me anything about your next trip." }
  ]);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    setMessages([...messages, { fromUser: true, text: prompt }]);
    setPrompt('');
    try {
      const result = await askTravelAI(prompt);
      setMessages((prev) => [...prev, { fromUser: false, text: result }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { fromUser: false, text: '⚠️ Error: Could not fetch travel plan.' },
      ]);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-t from-blue-200 via-white to-blue-50 flex justify-center items-center">
      <div className="w-[80%] h-[80%] max-w-[600px] max-h-[600px] rounded-xl shadow-lg border border-gray-200 bg-white">

        <div className="bg-blue-600 rounded-t-xl p-3 flex items-center text-white justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-full w-6 h-6 flex justify-center items-center">
              <span className="text-blue-600 font-bold">🧳</span>
            </div>
            <span className="font-semibold">AI Travel Companion</span>
          </div>
          <button className="text-white hover:text-gray-300">✖</button>
        </div>

        <div className="p-3 space-y-3 text-sm h-[80%] overflow-y-auto">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-lg max-w-[80%] ${
                msg.fromUser ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex items-center border-t p-2 bg-white">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Paperclip size={16} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Image size={16} />
          </button>
          <input
            className="flex-1 mx-2 p-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <button
            onClick={handleSubmit}
            className="p-2 text-blue-600 hover:text-blue-700 focus:outline-none"
          >
            <LucidePlane size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
