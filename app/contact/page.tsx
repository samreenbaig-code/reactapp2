"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 px-6">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="p-8 bg-gray-900 text-white flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">Contact</h1>

          <p className="mb-4">
            📧 Email: samreenbaig007@gmail.com
          </p>

          <a href="https://github.com/samreenbaig-code" target="_blank" className="underline">
  💻 GitHub: samreenbaig-code
</a>

          <p className="mb-4">
            📍 Location: St. Catharines, ON, Canada
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-8 flex flex-col justify-center"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">
            Send Message
          </h1>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 mb-4 rounded"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded"
          />

          <textarea
            placeholder="Message"
            className="w-full border p-3 mb-4 rounded"
          />

          <button className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>

      </div>

    </main>
  );
}