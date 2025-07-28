import { Suspense } from 'react'; // For lazy loading MDX

// Dynamic import for MDX files
async function getMDXContent(topic: string) {
  try {
    const MDXContent = (await import(`../../content/lessons/${topic}.mdx`)).default;
    return MDXContent;
  } catch {
    return null; // Fallback if no MDX file
  }
}

export default async function LessonPage({ params }: { params: { topic: string } }) {
  const topic = params.topic; // Get from props (server-friendly)
  const MDXContent = await getMDXContent(topic);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-black text-white p-8">
      <h1 className="text-5xl font-bold mb-6 capitalize">{topic.replace('-', ' ')} Lesson 🚀</h1>
      <p className="text-xl mb-4">Welcome to the {topic} module! Here you'll learn with simple analogies.</p>
      <Suspense fallback={<p>Loading content...</p>}>
        {MDXContent ? (
          <article className="prose prose-invert prose-headings:text-white prose-a:text-purple-300 max-w-4xl mx-auto">
            <MDXContent />
          </article>
        ) : (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-3xl mb-4">Introduction</h2>
            <p>Think of {topic} like building a house: HTML is the structure, CSS is the paint! 🏠</p>
          </div>
        )}
      </Suspense>
    </div>
  );
}