const Footer = () => {
    return (
      <footer className="bg-gray-800 w-full text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Logo and About */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Your Brand</h3>
              <p className="mt-2 text-gray-400 max-w-xs">
                Your Brand offers the best solutions for all your needs. Join us and be part of our journey to excellence.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div className="flex flex-wrap md:space-x-12">
              <div className="mb-8 md:mb-0">
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
                  <li><a href="/services" className="hover:text-gray-200">Services</a></li>
                  <li><a href="/blog" className="hover:text-gray-200">Blog</a></li>
                  <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
                </ul>
              </div>
              <div className="mb-8 md:mb-0">
                <h4 className="text-lg font-semibold text-white">Support</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="/help" className="hover:text-gray-200">Help Center</a></li>
                  <li><a href="/faq" className="hover:text-gray-200">FAQs</a></li>
                  <li><a href="/privacy" className="hover:text-gray-200">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-gray-200">Terms of Service</a></li>
                </ul>
              </div>
            </div>
  
            {/* Newsletter Signup */}
            <div className="mb-8 md:mb-0 md:w-1/3">
              <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
              <p className="text-gray-400 mt-2">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="mt-4 flex">
                <input
                  type="email"
                  className="w-full p-2 rounded-l-lg focus:outline-none text-gray-800"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Social Media Icons */}
          <div className="mt-10 flex justify-center space-x-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.598 0 0 .598 0 1.326v21.349C0 23.402.598 24 1.326 24h11.495v-9.294H9.691V10.8h3.13V8.4c0-3.1 1.892-4.788 4.657-4.788 1.325 0 2.462.099 2.792.143v3.24h-1.915c-1.5 0-1.793.713-1.793 1.762v2.309h3.587l-.467 3.906h-3.12V24h6.113c.73 0 1.325-.598 1.325-1.325V1.326C24 .598 23.402 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.815 9.815 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3a9.865 9.865 0 0 1-3.127 1.195 4.914 4.914 0 0 0-8.398 4.48A13.93 13.93 0 0 1 1.671 3.149 4.91 4.91 0 0 0 3.13 9.858a4.885 4.885 0 0 1-2.224-.616c-.054 2.14 1.492 4.159 3.723 4.6A4.902 4.902 0 0 1 .96 17.5a4.936 4.936 0 0 0 4.6 1.382 9.868 9.868 0 0 1-7.312 1.983A13.915 13.915 0 0 0 7.548 21c9.142 0 14.307-7.721 14.307-14.426 0-.219-.005-.437-.016-.654A10.243 10.243 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.95.24 2.408.396.506.171.877.378 1.267.769.39.39.598.76.769 1.267.156.457.34 1.238.396 2.407.058 1.267.07 1.648.07 4.851 0 3.204-.012 3.584-.07 4.85-.056 1.17-.24 1.95-.396 2.408-.171.506-.378.877-.769 1.267-.39.39-.76.598-1.267.769-.457.156-1.238.34-2.407.396-1.267.058-1.648.07-4.851.07-3.204 0-3.584-.012-4.85-.07-1.17-.056-1.95-.24-2.408-.396-.506-.171-.877-.378-1.267-.769-.39-.39-.598-.76-.769-1.267-.156-.457-.34-1.238-.396-2.407C2.175 15.584 2.163 15.204 2.163 12c0-3.204.012-3.584.07-4.85.056-1.17.24-1.95.396-2.408.171-.506.378-.877.769-1.267.39-.39.76-.598 1.267-.769.457-.156 1.238-.34 2.407-.396 1.267-.058 1.648-.07 4.851-.07zm0-2.163C8.756 0 8.329.014 7.054.072c-1.287.059-2.393.267-3.234.57A7.348 7.348 0 0 0 .57 3.82C.268 4.661.059 5.768.072 7.054.014 8.329 0 8.756 0 12c0 3.243.014 3.671.072 4.946.059 1.287.267 2.393.57 3.234a7.348 7.348 0 0 0 3.254 3.254c.841.303 1.947.511 3.234.57 1.275.059 1.703.072 4.946.072s3.671-.014 4.946-.072c1.287-.059 2.393-.267 3.234-.57a7.348 7.348 0 0 0 3.254-3.254c.303-.841.511-1.947.57-3.234.059-1.275.072-1.703.072-4.946s-.014-3.671-.072-4.946c-.059-1.287-.267-2.393-.57-3.234A7.348 7.348 0 0 0 20.946.57C20.105.268 18.999.059 17.712.072 16.437.014 16.01 0 12 0zm0 5.838a6.162 6.162 0 1 0 6.162 6.162A6.168 6.168 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.443 1.443 0 0 1 1.44 1.44z" />
              </svg>
            </a>
          </div>
  
          {/* Copyright */}
          <div className="mt-10 text-center text-gray-500">
            <p>&copy; 2024 Your Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  