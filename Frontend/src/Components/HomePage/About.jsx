import React from "react";

function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative flex gap-4">
          <img
            src="https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg"
            alt="About Image1"
            className="rounded-2xl shadow-lg w-1/2 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg"
            alt="About Image2"
            className="rounded-2xl shadow-lg w-1/2 object-cover"
          />

          {/* Badge */}
          
        </div>

        {/* Right Side - Content */}
        <div>
          <h4 className="uppercase text-gray-600 tracking-widest mb-2">
            About Us
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Making Every Event Special with <br />
            <span className="text-red-700">Great Food.</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Shankar Caterers has been serving happiness for over 15 years.
            Whether it’s a wedding, birthday party, kitty party, or corporate
            event – we make every celebration special with our mouthwatering
            vegetarian and non-vegetarian delicacies, chaats, sweets, and royal
            thalis.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-red-700">15+</p>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-red-700">1500+</p>
              <p className="text-gray-600 mt-2">Successful Events</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-red-700">90%</p>
              <p className="text-gray-600 mt-2">Repeated Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
