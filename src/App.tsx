import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const emojis = ["🚀", "🌟", "✨", "🎉", "💻"];
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % emojis.length;
      setCurrentEmoji(emojis[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, [emojis]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-500 text-white min-h-screen flex flex-col items-center justify-center">
      <header className="text-center p-8 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">AevonTek {currentEmoji}</span>
        </h1>
        <p className="text-lg md:text-xl">
          Your gateway to innovative technology solutions! 🌟
        </p>
      </header>

      <div className="mt-8 flex space-x-4 animate-bounceIn">
        <a
          href="#about"
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg transform hover:scale-110 transition duration-300"
        >
          Learn More
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg transform hover:scale-110 transition duration-300"
        >
          Contact Us
        </a>
      </div>

      <footer className="fixed bottom-0 w-full text-center p-4 bg-gray-800 bg-opacity-50 text-sm">
        <p>Launching Soon! Stay tuned for updates. ✨</p>
      </footer>
    </div>
  );
};

export default App;
