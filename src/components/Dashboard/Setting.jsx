import{ useState } from "react";

const Settings = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto max-w-lg shadow-lg rounded-lg overflow-hidden bg-white p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Settings</h2>

        {/* Profile Update Section */}
        <form onSubmit={handleUpdateProfile} className="space-y-4 mb-6">
          <h3 className="text-xl font-semibold mb-2">Profile</h3>
          <label className="block">
            <span className="text-gray-700">Username</span>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Update Profile
          </button>
        </form>

        {/* Password Section */}
        <div className="space-y-4 mb-6">
          <h3 className="text-xl font-semibold mb-2">Password</h3>
          <label className="block">
            <span className="text-gray-700">New Password</span>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            onClick={() => alert("Password changed!")}
            className="w-full py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Change Password
          </button>
        </div>

        {/* Preferences Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Preferences</h3>
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-indigo-600"
                checked={darkMode}
                onChange={handleToggleDarkMode}
              />
              <span className="ml-2">Enable</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
