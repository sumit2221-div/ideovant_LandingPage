import React from "react";
import SplitText from "../animation_elements/split_text.jsx";
import { Typewriter } from "react-simple-typewriter";

const services = [
  {
    title: "Web Development",
    description: "Responsive and robust web applications tailored to your business.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Seamless mobile apps for Android & iOS using modern frameworks.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "User-focused designs that deliver engagement and satisfaction.",
    icon: "🎨",
  },
  {
    title: "SEO & Analytics",
    description: "Boost your online presence and understand your audience.",
    icon: "📊",
  },
];

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="text-center py-36 px-4 sm:px-6 md:px-10 lg:px-20">
        <SplitText
          text="Welcome to Ideovent Technologies"
          className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-4"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          We build{" "}
          <span className="text-blue-600 underline underline-offset-2 decoration-blue-400">
            <Typewriter
              words={["Web Apps", "Mobile Apps", "Your Vision"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-6 px-2">
          Ideovent Technologies transforms bold ideas into high-performance digital solutions for the modern world.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition shadow-md">
          Get Started
        </button>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-6">
            Our Services
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
            At Ideovent Technologies, we provide a range of expert solutions designed to bring your ideas to life with precision and performance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-blue-50 hover:bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg border border-transparent hover:border-blue-200 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="text-4xl sm:text-5xl mb-4 text-blue-600 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

   {/* Happy Clients Section */}
<div className="bg-white py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">What Our Clients Say</h2>
    <p className="text-gray-600 mb-12 text-base sm:text-lg">
      Our work speaks through the words of our valued clients.
    </p>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Aarav Mehta",
          role: "CEO, InnovateX",
          quote:
            "Ideovent delivered exactly what we needed — high performance, elegant design, and timely delivery.",
          rating: 5,
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Sara Kapoor",
          role: "Marketing Head, BlueSky",
          quote:
            "Working with Ideovent felt like adding a full dev team to our startup. They’re professional and fast.",
          rating: 4.5,
          image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
          name: "Rahul Sinha",
          role: "Founder, RapidStack",
          quote:
            "Their approach to development is collaborative and effective. Highly recommended for scalable builds!",
          rating: 4.8,
          image: "https://randomuser.me/api/portraits/men/45.jpg",
        },
      ].map((client, index) => (
        <div
          key={index}
          className="relative bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left"
        >
          <div className="absolute top-4 right-4 text-3xl text-blue-100">“</div>

          <p className="text-gray-700 italic mb-6 leading-relaxed">"{client.quote}"</p>

          <div className="flex items-center space-x-4">
            <img
              src={client.image}
              alt={client.name}
              className="h-12 w-12 rounded-full object-cover shadow"
            />
            <div>
              <p className="font-semibold text-blue-800">{client.name}</p>
              <p className="text-sm text-gray-600">{client.role}</p>
              <p className="text-sm text-yellow-500 mt-1">⭐ {client.rating} / 5</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      
    </section>
  );
};

export default Hero;
