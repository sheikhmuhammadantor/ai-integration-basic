import { Link } from "react-router";
import Button from "../components/Shared/Button";
import { FaRocket, FaLock, FaBolt } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <header className="w-full max-w-6xl flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold">ChatGPT Clone</h1>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Get Started
        </Button>
      </header>
      <main className="text-center mt-20">
        <h2 className="text-5xl font-bold">Experience AI-powered Conversations</h2>
        <p className="text-gray-400 mt-4 max-w-2xl">
          ChatGPT Clone provides seamless, intelligent, and instant AI-powered chat experiences.
        </p>
        <div className="flex gap-6 mt-10">
          <Link to="cat-gpt/chat" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-lg">
            Try ChatGPT
          </Link>
          <Button className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-lg text-lg">
            Learn More
          </Button>
        </div>
      </main>
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <FaRocket className="text-blue-400 text-4xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Fast & Responsive</h3>
          <p className="text-gray-400 mt-2">Instant AI-powered responses anytime.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <FaLock className="text-green-400 text-4xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Secure & Private</h3>
          <p className="text-gray-400 mt-2">Your data remains protected at all times.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <FaBolt className="text-yellow-400 text-4xl mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">AI-Powered</h3>
          <p className="text-gray-400 mt-2">Advanced AI for natural conversations.</p>
        </div>
      </section>
    </div>
  );
}
