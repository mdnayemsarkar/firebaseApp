
import { FaCode, FaChartLine, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import Header from "./Header";

const services = [
  {
    icon: <FaCode size={50} className="text-blue-600" />,
    title: "Web Development",
    description:
      "We create responsive and modern websites that help you connect with your audience and grow your business.",
  },
  {
    icon: <FaChartLine size={50} className="text-green-600" />,
    title: "SEO Optimization",
    description:
      "Our SEO services increase your online visibility and drive more traffic to your website.",
  },
  {
    icon: <FaPaintBrush size={50} className="text-red-600" />,
    title: "Graphic Design",
    description:
      "Unique and creative designs that make your brand stand out in a competitive market.",
  },
  {
    icon: <FaMobileAlt size={50} className="text-purple-600" />,
    title: "Mobile Development",
    description:
      "High-quality mobile apps for Android and iOS that offer a seamless user experience.",
  },
];

const Service2 = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Expertise
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We provide a range of services to help your business thrive in the digital age.
          </p>

          {/* Service List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-lg p-8 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                {/* Service Icon */}
                <div className="mb-4 md:mb-0 md:mr-6">
                  {service.icon}
                </div>
                
                {/* Service Details */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service2;
