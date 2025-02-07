import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import useAxiosPublic from "../hook/useAxiosPublic";
import MarkDownComponent from "../hook/MarkDownComponent";

export default function CarGPT() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const axiosPublic = useAxiosPublic();

    const handleSend = async () => {
        if (input.trim() === "") return;
        setMessages((previous) => [...previous, { text: input, sender: "user" }]);
        setInput("");

        try {
            const res = await axiosPublic('/ai-res', {
                params: { prompt: input }
            });
            console.log(res.data.response);
            setMessages((previous) => [...previous, { text: res?.data?.response, sender: "ai" }]);
        } catch (error) {
            console.log('error', error)
        }
    };
    return (
        <div className="bg-gray-900 text-white min">
            {/* Header */}
            <div className="p-4 text-center text-xl font-bold bg-gray-800">
                Chat With Cat
            </div>

            {/* Chat Area */}
            <div className="p-4 gap-3 h-[70vh] overflow-auto">
                {messages.length === 0 ? (
                    <div className="text-center text-gray-400 mt-20">
                        Ask anything...
                    </div>
                ) : (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`my-2 p-3 rounded-lg md:max-w-[45%] md:w-fit w-fit max-w-11/12 overflow-auto ${msg.sender === "user" ? "ml-auto bg-blue-800/50" : "mr-auto bg-gray-700"
                                }`}
                        >
                            {/* {msg.text} */}
                            <MarkDownComponent markdownText={msg.text}/>
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
                    type="button"
                    onClick={handleSend}
                    className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                    <FaPaperPlane />
                </button>
            </div>
        </div>
    );
}
