export default function Projects() {
  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-bold">Kids Learning App</h2>
          <p className="text-gray-600 mt-2">
            Interactive ABC game with animations and sounds.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-bold">E-commerce Website</h2>
          <p className="text-gray-600 mt-2">
            Full shopping experience with cart and checkout.
          </p>
        </div>

      </div>
    </main>
  );
}