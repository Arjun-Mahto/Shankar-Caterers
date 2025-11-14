import React from "react";


function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
    backgroundImage: `url("https://images.pexels.com/photos/18749077/pexels-photo-18749077.jpeg")`,
  }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 object-cover bg-black/50 transition-opacity"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4">
        <h3 className="md:text-4xl md:font-bold  text-yellow-400 uppercase tracking-widest">
          Welcome to Shankar Caterers
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold text-white my-4">
          Namaste!
        </h1>
        <p className="text-gray-200 md:text-lg leading-relaxed">
           We cater all types of functions including weddings, birthday parties,
      kitty parties, and corporate events. Our menu features delicious
      vegetarian and non-vegetarian thalis, chaats, sweets, and royal
      delicacies. With excellence and tradition, we have successfully catered
      1,500+ memorable events.
        </p>

        {/* Buttons (Optional) */}
        {/* <div className="mt-6 flex justify-center gap-4">
          <a
            href="#menu"
            className="px-6 py-2 border-2 border-yellow-500 text-white rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border-2 border-red-600 text-white rounded-full hover:bg-red-600 transition"
          >
            Contact Us
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;
