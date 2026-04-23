export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-5xl md:text-6xl font-extrabold">
        Hi, I'm <span className="text-yellow-400">Samreen</span> 👋
      </h1>

      <p className="mt-6 text-lg text-gray-300 max-w-xl">
        I design and build modern, responsive web applications using React & Next.js.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="/projects" className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:scale-110 transition">
          View Projects
        </a>

        <a href="/contact" className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Contact Me
        </a>
      </div>

    </main>
  );
}