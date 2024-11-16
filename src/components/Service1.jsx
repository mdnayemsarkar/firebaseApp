import { FaCode, FaChartLine, FaPaintBrush, FaMobileAlt } from "react-icons/fa"; // Import icons for services
import Header from "./Header";
const services = [
  {
    icon: <FaCode size={40} className="text-blue-600" />,
    title: "Web Development",
    description:
      "Building responsive and modern websites tailored to your business needs.",
  },
  {
    icon: <FaChartLine size={40} className="text-green-600" />,
    title: "SEO Optimization",
    description:
      "Boost your online presence with our comprehensive SEO services.",
  },
  {
    icon: <FaPaintBrush size={40} className="text-red-600" />,
    title: "Graphic Design",
    description:
      "Creative and unique designs to give your brand a visual edge.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-purple-600" />,
    title: "Mobile Development",
    description:
      "Developing high-quality mobile applications for Android and iOS platforms.",
  },
];

const Service1 = () => {
  return (
    <div>
    <Header/>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-indigo-100 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We offer a wide range of services to meet all your business needs.
            Discover our offerings below.
          </p>

          {/* Service Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
              >
                {/* Service Icon */}
                <div className="mb-4">{service.icon}</div>
                {/* Service Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                {/* Service Description */}
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service1;
