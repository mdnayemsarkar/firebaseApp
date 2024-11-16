import Header from "./Header";
const Contact = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
        <div className="container mx-auto px-6 py-12 md:py-24 lg:px-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Have questions or want to work with us? Fill out the form below, and
            we’ll get back to you as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-4">
                Reach out to us via phone or email, or visit us at our office.
              </p>
              <ul className="space-y-4">
                <li>
                  <strong>Phone:</strong> (123) 456-7890
                </li>
                <li>
                  <strong>Email:</strong> contact@example.com
                </li>
                <li>
                  <strong>Address:</strong> 123 Business Road, City, State
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-600" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Your Message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
