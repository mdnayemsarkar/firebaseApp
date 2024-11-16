/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User is logged in:", user);
        try {
          // Query Firestore for the user's document by email
          const q = query(
            collection(db, "users"),
            where("Email", "==", user.email)
          );
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const userData = doc.data();
              console.log("User document data:", userData);
              setName(userData.fullName || "User"); // Default to "User" if fullName is missing
            });
          } else {
            console.log("No matching user document found in Firestore.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user is logged in.");
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full justify-center bg-gray-100">
      <div className="w-full">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen min-w-full bg-gradient-to-br from-blue-500 to-blue-700 relative text-white text-center p-10">
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-5xl font-bold mb-4">Welcome to Our App!</h1>

    {/* Display the user's name if available */}
    {name && (
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Welcome, {name}!</h2>
      </div>
    )}

    <p className="text-lg mb-6 max-w-lg">
      Your journey to a better experience starts here.
    </p>

    <button className="bg-[rgba(255,255,255,0.8)] text-blue-700 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-[rgba(255,255,255,0.9)] transition duration-300">
      Get Started
    </button>
  </div>
</div>


      {/* Other sections unchanged */}
      <div className="bg-gray-50 py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            What Our Users Are Saying
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of satisfied users who have experienced our services.
          </p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://via.placeholder.com/64" // Replace with actual image URL
              alt="User One"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Sarah Johnson
            </h3>
            <p className="text-sm text-gray-500 mb-4">CEO of Company X</p>
            <p className="text-gray-700 italic mb-4">
              "This app has completely transformed how we work. It's intuitive,
              efficient, and the support is fantastic!"
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.451L23.447 9.8l-5.585 5.445L19.335 24 12 20.019 4.665 24l1.473-8.755L.553 9.8l7.779-1.762L12 .587z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://via.placeholder.com/64" // Replace with actual image URL
              alt="User Two"
            />
            <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
            <p className="text-sm text-gray-500 mb-4">Marketing Director</p>
            <p className="text-gray-700 italic mb-4">
              "I've used many apps, but this one stands out. The features are
              top-notch and it really makes a difference!"
            </p>
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.451L23.447 9.8l-5.585 5.445L19.335 24 12 20.019 4.665 24l1.473-8.755L.553 9.8l7.779-1.762L12 .587z" />
                </svg>
              ))}
              <svg
                className="w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.451L23.447 9.8l-5.585 5.445L19.335 24 12 20.019 4.665 24l1.473-8.755L.553 9.8l7.779-1.762L12 .587z" />
              </svg>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://via.placeholder.com/64" // Replace with actual image URL
              alt="User Three"
            />
            <h3 className="text-xl font-semibold text-gray-800">Emily Chen</h3>
            <p className="text-sm text-gray-500 mb-4">Product Manager</p>
            <p className="text-gray-700 italic mb-4">
              "Fantastic experience! The app is user-friendly and customer
              support is super responsive."
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.451L23.447 9.8l-5.585 5.445L19.335 24 12 20.019 4.665 24l1.473-8.755L.553 9.8l7.779-1.762L12 .587z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* other testomonial ends hebg-gray-50 re  */}
      <section className="py-16 w-full h-screen bg-gradient-to-br from-green-300 to-blue-300 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Our Happy Users
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 italic mb-4">
                "Fantastic support and incredible results!"
              </p>
              <p className="font-semibold text-gray-800">
                — Clara N., Business Analyst
              </p>
              <div className="flex justify-center mt-4">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  Verified User
                </span>
              </div>
            </div>
            {/* End of Card */}

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 italic mb-4">
                "This app has simplified everything for me."
              </p>
              <p className="font-semibold text-gray-800">
                — David P., Consultant
              </p>
              <div className="flex justify-center mt-4">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  Verified User
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 italic mb-4">
                "It feels like it was designed with me in mind!"
              </p>
              <p className="font-semibold text-gray-800">
                — Sophie L., Entrepreneur
              </p>
              <div className="flex justify-center mt-4">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  Verified User
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 italic mb-4">
                "The best app I've come across in years."
              </p>
              <p className="font-semibold text-gray-800">— Mike T., Designer</p>
              <div className="flex justify-center mt-4">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  Verified User
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 w-full h-screen bg-gradient-to-br from-green-300 to-blue-300 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Our Happy Users
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 italic mb-4">
                "Fantastic support and incredible results!"
              </p>
              <p className="font-semibold text-gray-800">
                — Clara N., Business Analyst
              </p>
              <div className="flex justify-center mt-4">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  Verified User
                </span>
              </div>
            </div>
            {/* End of Card */}

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 italic mb-4">
                "This app has simplified everything for me."
              </p>
              <p className="font-semibold text-gray-800">
                — David P., Consultant
              </p>
              <div className="flex justify-center mt-4">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  Verified User
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 italic mb-4">
                "It feels like it was designed with me in mind!"
              </p>
              <p className="font-semibold text-gray-800">
                — Sophie L., Entrepreneur
              </p>
              <div className="flex justify-center mt-4">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  Verified User
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-gray-600 italic mb-4">
                "The best app I've come across in years."
              </p>
              <p className="font-semibold text-gray-800">— Mike T., Designer</p>
              <div className="flex justify-center mt-4">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  Verified User
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* new section ends here  */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "Outstanding support and great features!"
              </p>
              <p className="font-semibold">— Alice W., CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "Simply the best tool I've used in years!"
              </p>
              <p className="font-semibold">— Bob K., Project Manager</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "It has become an essential part of my workflow."
              </p>
              <p className="font-semibold">— Claire P., Developer</p>
            </div>
          </div>
        </div>
      </section>
      {/* new section ends here  */}
      <Footer />
    </div>
  );
};

export default Home;
