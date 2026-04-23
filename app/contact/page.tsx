"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400">

      <form className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md" onSubmit={handleSubmit}>

        <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>

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

    </main>
  );
}