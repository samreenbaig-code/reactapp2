export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{
          backgroundImage: "url('/bg.png')", // 👉 your image in public folder
        }}
      ></div>

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-10 md:px-20">
        
        <div className="max-w-xl text-white">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I'm Samreen 
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Mobile Web Developer | AI Developer | UI Designer
          </h2>

          <p className="text-gray-300 mb-6 leading-7">
            Mobile Web Developer using AI tools. I build responsive websites, 
            mobile apps, and modern UI experiences.
          </p>

          <a
  href="/cv/cv.pdf"
  download
  className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition shadow-lg inline-block"
>
  Download CV
</a>

        </div>

      </div>

    </main>
  );
}