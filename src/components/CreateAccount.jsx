/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Header from "./Header";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link ,useNavigate} from "react-router-dom";
const CreateAccount = () => {
  // State to manage form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
  // Handle form submission
  const handleCreateAccount = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created:", userCredential.user);
      navigate("/login");
    } catch (error) {
      console.error("Error creating account:", error);
    }

    // Log email and password (be cautious with logging passwords in production)
    console.log(email, password);
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>
          <form onSubmit={handleCreateAccount}>
            {/* Attach the submit handler to the form */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email} // Bind input value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password} // Bind input value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on input change
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <button
              type="submit" // Ensure the button type is "submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Create Account
            </button>
            <p className="mt-3">
              Already Have an Account?
              <Link to="/login">
                <span className="text-blue-600">Login</span>
              </Link>
            </p>
            <p className="mt-3">
             Don't Have an Account?
              <Link to="/signup">
                <span className="text-blue-600">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
