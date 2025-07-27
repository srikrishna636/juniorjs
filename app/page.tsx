'use client'; // Keep this for client-side rendering

import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input'; // Shadcn Input
import { Search, User, Rocket, Building2, Palette, Atom } from 'lucide-react'; // Lucide icons
import Link from 'next/link';

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
        <a href="/" className="text-xl font-bold flex items-center">
          JuniorJS <Rocket className="ml-2 h-5 w-5 text-pink-500" />
        </a>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
          <Input 
            placeholder="Search topics..." 
            className="pl-10 bg-white/10 border-none text-white placeholder-white/50 rounded-full focus-visible:ring-0"
          />
        </div>
        <a href="/profile" className="flex items-center hover:text-purple-300">
          <User className="mr-1 h-5 w-5" /> Profile
        </a>
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
          {[
            { title: 'HTML Basics', icon: Building2, emoji: '🏗️', slug: 'html-basics' },
            { title: 'CSS Flexbox', icon: Palette, emoji: '🎨', slug: 'css-flexbox' },
            { title: 'React Hooks', icon: Atom, emoji: '⚛️', slug: 'react-hooks' }
          ].map((topic, index) => (
            <Link href={`/${topic.slug}`} key={index}>
              <motion.div 
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl cursor-pointer flex flex-col items-start"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <topic.icon className="h-8 w-8 text-yellow-400 mb-2" />
                <h3 className="text-2xl font-semibold mb-2">{topic.title} {topic.emoji}</h3>
                <p>Start learning with fun analogies! 🚀</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}