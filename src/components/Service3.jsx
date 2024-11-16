import { FaCode, FaChartLine, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import Header from "./Header";

const services = [
  {
    icon: <FaCode size={40} className="text-white" />,
    title: "Web Development",
    description: "Modern websites designed with user experience in mind.",
    image:
      "https://via.placeholder.com/400x300/007bff/ffffff?text=Web+Development", // Placeholder image
  },
  {
    icon: <FaChartLine size={40} className="text-white" />,
    title: "SEO Optimization",
    description: "Enhance your online visibility with expert SEO strategies.",
    image:
      "https://via.placeholder.com/400x300/28a745/ffffff?text=SEO+Optimization", // Placeholder image
  },
  {
    icon: <FaPaintBrush size={40} className="text-white" />,
    title: "Graphic Design",
    description: "Creative designs that capture your brand's essence.",
    image:
      "https://via.placeholder.com/400x300/dc3545/ffffff?text=Graphic+Design", // Placeholder image
  },
  {
    icon: <FaMobileAlt size={40} className="text-white" />,
    title: "Mobile Development",
    description: "Apps that provide seamless user experiences on all devices.",
    image:
      "https://via.placeholder.com/400x300/6610f2/ffffff?text=Mobile+Development", // Placeholder image
  },
];

const Service3 = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Comprehensive Services
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover the range of services we offer to take your business to the
            next level.
          </p>

          {/* Service Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 flex flex-col items-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service3;
