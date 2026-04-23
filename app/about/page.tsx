export default function About() {
  return (
    <main className="px-10 py-12 bg-white min-h-screen">

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT SIDE (TEXT) */}
        <div>
          <h1 className="text-5xl font-bold mb-4">About Me</h1>

          <p className="text-gray-600 text-lg leading-7 mb-6">
            I am currently pursuing a Mobile Web Developer program with a focus on AI at Trios College. 
            I specialize in building modern, responsive websites and mobile applications that deliver smooth user experiences.
          </p>

          <h2 className="text-3xl font-semibold mb-3">
            Professional Summary
          </h2>

          <p className="text-gray-600 text-lg leading-7">
            I am a passionate Mobile Web Developer with hands-on experience in creating responsive websites, 
            mobile applications, and modern UI/UX interfaces. My technical skills include HTML, CSS, JavaScript, 
            React, Next.js, Swift, and Java.
          </p>

          {/* GOAL */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">My Goal</h2>
            <p className="text-gray-600 text-lg leading-7">
              My goal is to become a skilled Full-Stack Developer, building modern, user-friendly web and mobile applications. 
              I aim to continuously improve my technical skills and create meaningful digital experiences that solve real-world problems.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/about bg.png"
            alt="Profile"
            className="rounded-2xl shadow-xl w-[320px] md:w-[380px] hover:scale-105 transition"
          />
        </div>

      </div>

    </main>
  );
}