// src/components/UserProfile.jsx
const UserProfile = () => {
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "This is a simple user profile page. You can add more details here.",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            className="w-32 h-32 rounded-full border-4 border-blue-500"
            src={user.profilePic}
            alt="Profile"
          />
        </div>

        {/* User Info */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">{user.name}</h1>
          <p className="text-lg text-gray-600">{user.email}</p>
        </div>

        {/* Bio Section */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-inner mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Me</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
