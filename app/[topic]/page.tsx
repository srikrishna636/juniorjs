'use client'; // Client-side for potential interactivity

import { useParams } from 'next/navigation'; // To get the topic from URL

export default function LessonPage() {
  const params = useParams(); // Gets dynamic params like { topic: 'html' }
  const topic = params.topic as string; // Type it as string

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-black text-white p-8">
      <h1 className="text-5xl font-bold mb-6 capitalize">{topic} Lesson 🚀</h1>
      <p className="text-xl mb-4">Welcome to the {topic} module! Here you'll learn with simple analogies.</p>
      {/* Placeholder for MDX content */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
        <h2 className="text-3xl mb-4">Introduction</h2>
        <p>Think of {topic} like building a house: HTML is the structure, CSS is the paint! 🏠</p>
        {/* We'll add real MDX and code editor here later */}
      </div>
    </div>
  );
}