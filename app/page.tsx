export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[80vh] text-center bg-gradient-to-br from-blue-100 to-purple-200">
      
      <h1 className="text-5xl font-extrabold text-gray-800">
        Hi, I'm Samreen 👋
      </h1>

      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        I build modern, responsive web applications using React and Next.js.
      </p>

      <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
        View My Work
      </button>

    </main>
  );
}