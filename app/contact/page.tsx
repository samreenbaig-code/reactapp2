"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <main className="p-10 flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-2 mb-3 rounded"
        />

        <button className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
          Send Message
        </button>

      </form>
    </main>
  );
}