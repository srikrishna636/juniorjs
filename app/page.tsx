'use client';
import { motion } from 'framer-motion'; // Import for animations

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-black text-white overflow-hidden">
      {/* Floating Navigation Bar */}
      <motion.nav 
        className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-full px-6 py-3 shadow-lg z-50 flex items-center space-x-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <a href="/" className="text-xl font-bold flex items-center">JuniorJS 🚀</a>
        <input 
          type="text" 
          placeholder="Search topics... 🔍" 
          className="bg-white/10 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none"
        />
        <a href="/profile" className="hover:text-purple-300">Profile 👤</a>
      </motion.nav>

      {/* Hero Section with Large Typography and Emoji */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h1 
          className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Learn Web Tech Like a Boss! 💥
        </motion.h1>
        <p className="text-xl mt-4 max-w-2xl">Simple explanations for HTML, CSS, React & more – even kids get it! 🎉</p>
      </section>

      {/* Featured Lessons Section with Card Grid */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Topics 📚</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {['HTML Basics 🏗️', 'CSS Flexbox 🎨', 'React Hooks ⚛️'].map((topic, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{topic}</h3>
              <p>Start learning with fun analogies! 🚀</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}