import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(
            collection(db, "users"),
            where("Email", "==", user.email)
          );
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const userData = doc.data();
              setName(userData.fullName || "User");
            });
          } else {
            console.log("No matching user document found in Firestore.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setName("");
      }
    });
  }, []);
  // logout code here start
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setName("");
      setShowDetails(false);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Service dropdown handler
  const toggleServicesDropdown = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsServicesOpen(false);
  };
  // login logic here
  const handleLoginClick = () => {
    if (name) {
      setShowDetails((prev) => !prev);
    } else {
      navigate("/login"); // Redirect to login page if user is not logged in
    }
  };
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">MyApp</h1>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/home"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Dashboard
          </Link>

          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="absolute flex flex-col bg-white text-black shadow-lg rounded-lg p-2 mt-2 w-40 z-30">
                <Link
                  to="/service1"
                  onClick={closeDropdown}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  Service 1
                </Link>
                <Link
                  to="/service2"
                  onClick={closeDropdown}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  Service 2
                </Link>
                <Link
                  to="/service3"
                  onClick={closeDropdown}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  Service 3
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Contact
          </Link>
         

          <div className="relative">
            <button
              className="text-white flex items-center justify-evenly hover:text-gray-300 transition duration-200"
              onClick={handleLoginClick}
            >
              {name ? ` ${name}` : "Login"}
            </button>
            {showDetails && name && (
              <div className="absolute bg-white w-60 shadow-md rounded-lg p-4 mt-2 right-0 text-gray-800 z-20">
                <h2 className="text-lg font-semibold mb-2">{name}</h2>
                <p className="text-sm mb-4">Welcome to the app!</p>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {isOpen && (
          <nav className="md:hidden absolute top-16 left-0 w-full bg-blue-600 shadow-md z-40">
            <ul className="flex flex-col items-center space-y-4 p-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/create-account"
                  className="text-white hover:text-gray-300 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link
                  to="/service1"
                  className="text-white hover:text-gray-300 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Service 1
                </Link>
              </li>
              <li>
                <Link
                  to="/service2"
                  className="text-white hover:text-gray-300 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Service 2
                </Link>
              </li>
              <li>
                <Link
                  to="/service3"
                  className="text-white hover:text-gray-300 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Service 3
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-300 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
