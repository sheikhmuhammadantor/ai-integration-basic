import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatHomePage() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { text: input, sender: "ai" }]);
        setInput("");

    };

    return (
        <div className="flex flex-col h-[70%] bg-gray-900 text-white">
            {/* Header */}
            <div className="p-4 text-center text-xl font-bold bg-gray-800">
                Chat With AI
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 gap-3">
                {messages.length === 0 ? (
                    <div className="text-center text-gray-400 mt-20">
                        Ask anything...
                    </div>
                ) : (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`my-2 p-3 rounded-lg md:max-w-[45%] md:w-fit w-11/12 bg-gray-700 ${msg.sender === "user" ? "ml-auto" : "mr-auto"
                                }`}
                        >
                            {msg.text}
                        </div>
                    ))
                )}
            </div>

            {/* Input Box */}
            <div className="p-4 bg-gray-800 flex items-center gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-2 rounded-lg bg-gray-700 text-white outline-none"
                    placeholder="Ask me anything..."
                />
                <button
                    onClick={handleSend}
                    className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                    <FaPaperPlane />
                </button>
            </div>
        </div>
    );
}
