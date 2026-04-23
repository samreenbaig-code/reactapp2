export default function About() {
  return (
    <main className="p-10 bg-white min-h-screen flex flex-col items-center text-center">

      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-gray-700 max-w-2xl leading-7">
        I am a passionate developer who loves building beautiful and functional websites.
        I specialize in React, JavaScript, and modern UI design.
      </p>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <span className="bg-black text-white px-4 py-2 rounded-full">React</span>
        <span className="bg-black text-white px-4 py-2 rounded-full">Next.js</span>
        <span className="bg-black text-white px-4 py-2 rounded-full">JavaScript</span>
      </div>

    </main>
  );
}