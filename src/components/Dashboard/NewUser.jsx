import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import Header from "../Header";
import { db } from "../../../firebaseConfig"; // Ensure correct import path
import { UserContext } from "../Dashboard/UserContext"; // Ensure correct import path
import { useNavigate } from "react-router-dom";

const AddNewUser = () => {
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext); // Access addUser from context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Data:", formData);

    try {
      const docRef = await addDoc(collection(db, "friends"), {
        name: formData.name, // Access from formData
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        role: formData.role,
      });
      console.log("Document written with ID: ", docRef.id);

      addUser({ ...formData, id: docRef.id }); // Add user to context
      navigate("/dashboard"); // Navigate after successful submit
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter address"
            />
          </div>

          {/* Role Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
