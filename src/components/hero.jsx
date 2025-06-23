import React from "react";
import SplitText from "../animation_elements/split_text.jsx";
import { FaArrowDown } from "react-icons/fa";


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
      <div className="text-center py-38 px-6 relative">
        <SplitText
          text="Welcome to Ideovent Technologies"
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
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

        <h2 className="text-xl text-gray-600 mb-3">
          Innovating with passion. Building with precision.
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Ideovent Technologies transforms bold ideas into high-performance digital solutions for the modern world.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition shadow-md">
          Get Started
        </button>

      
      </div>

    {/* Services Section */}
<div className="py-38 px-6 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">
      Our Services
    </h2>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base">
      At Ideovent Technologies, we provide a range of expert solutions designed to bring your ideas to life with precision and performance.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-blue-50 hover:bg-white p-10 rounded-xl shadow-md hover:shadow-lg border border-transparent hover:border-blue-200 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className="text-5xl mb-4 text-blue-600 group-hover:scale-110 transition">{service.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
