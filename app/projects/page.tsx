export default function Projects() {
  return (
    <main className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Project 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          
          {/* IMAGE */}
          <div className="h-100 overflow-hidden">
            <img
              src="/project 3.png"
              alt="Kids Learning App"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-5">
            <h2 className="text-xl font-bold">Kids Learning App</h2>
            <p className="text-gray-600 mt-2">
              Interactive ABC game with animations and sounds.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          
          {/* IMAGE */}
          <div className="h-100 overflow-hidden">
            <img
              src="/project2.png"
              alt="E-commerce Website"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-5">
            <h2 className="text-xl font-bold">E-commerce Website</h2>
            <p className="text-gray-600 mt-2">
              Full shopping experience with cart and checkout.
            </p>
          </div>
        </div>

      </div>

    </main>
  );
}