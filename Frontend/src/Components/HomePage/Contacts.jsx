import { useForm } from "react-hook-form";

function Contacts() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if(data.name === "" || data.number === "" || data.event === "" || data.guests === "" || data.date === "")
       alert("Please fill all the fields");
    else
      alert("Form submitted successfully!");
      
    
    console.log(data);
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-6 bg-gradient-to-b from-yellow-50 to-yellow-200"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/18749077/pexels-photo-18749077.jpeg')] bg-cover bg-center opacity-20"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Info Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-800">
            Contact Us
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            We cater all kinds of events — <b>weddings, birthday parties, kitty
            parties, anniversaries, and corporate functions</b>.  
            Get in touch to make your celebration truly delicious!
          </p>

          <div className="space-y-3 text-lg">
            <p className="flex items-center justify-center md:justify-start gap-2 text-gray-900">
              📞 <span className="font-medium">+91 9012004671</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-gray-900">
              📧 <span className="font-medium">arjunmahto139@gmail.com</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-gray-900">
              📍 <span className="font-medium">Dehradun, Uttarakhand</span>
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col gap-4 border border-yellow-400"
          >
            <h2 className="text-2xl font-semibold text-yellow-700 text-center mb-2">
              Book Your Event 🍽️
            </h2>
            <p className="text-gray-700 text-center mb-4 text-sm">
              Fill out your details and we’ll get back to you within 24 hours.
            </p>

            <input
              {...register("name")}
              placeholder="Enter your Name"
              className="w-full p-3 rounded-lg bg-yellow-50 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-yellow-500 outline-none transition"
            />

            <input
              {...register("number")}
              placeholder="Enter your Mobile Number"
              className="w-full p-3 rounded-lg bg-yellow-50 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-yellow-500 outline-none transition"
            />

            <input
              {...register("event")}
              placeholder="Event (e.g., Wedding, Birthday, Kitty Party)"
              className="w-full p-3 rounded-lg bg-yellow-50 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-yellow-500 outline-none transition"
            />

            <input
              {...register("guests")}
              placeholder="Number of Guests"
              className="w-full p-3 rounded-lg bg-yellow-50 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-yellow-500 outline-none transition"
            />

            <input
              type="date"
              {...register("date")}
              className="w-full p-3 rounded-lg bg-yellow-50 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-yellow-500 outline-none transition"
            />

            <button
              type="submit"
              className="mt-2 bg-yellow-600 text-black font-semibold py-3 rounded-full hover:bg-yellow-700 hover:text-white hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
