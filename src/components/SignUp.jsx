import { useState } from "react";
import { auth } from "../../firebaseConfig"; // For configuration we need to provide it here
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; //as we create user with email and password so we have to provide it here
import { useNavigate, Link } from "react-router-dom"; //For navigate the path we need to provide it here
import Header from "./Header";
import { doc, setDoc } from "firebase/firestore"; //as we need to create document for individual user thus it here
import { db } from "../../firebaseConfig"; // This will create a database for for the user

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    try {
      // Create an account with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update the user's display name in Firebase
      await updateProfile(userCredential.user, { displayName: fullName });

      // Add additional user data to Firestore (first you have to create in firestore the "users" field then put it in below fields)
      await setDoc(doc(db, "users", "Document_ID"), {
        fullName: fullName,
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
      });

      // Set success message and redirect
      setSuccess("Account created successfully!");
      setError("");
      navigate("/login");

      // Logging the formData fields for debugging
    } catch (error) {
      console.log("Signup Error:", error);
      setError(error.message);
    }
    console.log(fullName, password, confirmPassword, email);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
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
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-blue-600">Log In</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
