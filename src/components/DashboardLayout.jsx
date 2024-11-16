import { Link, } from "react-router-dom";
import {
  ChartPieIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline"; // Ensure @heroicons is installed
import { useContext } from "react";
import Header from "../components/Header";
import { UserContext } from "../components/Dashboard/UserContext"; // Adjust the path as needed

const DashboardLayout = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      <Header />
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-700 text-white flex flex-col justify-between p-6">
          <div>
            <h2 className="text-3xl font-bold mb-8">My Dashboard</h2>
            <nav className="space-y-4">
              <Link
                to="/overview"
                className="flex items-center p-3 hover:bg-blue-600 rounded-lg transition duration-200"
              >
                <ChartPieIcon className="w-6 h-6 mr-3" />
                Overview
              </Link>
              <Link
                to="/users"
                className="flex items-center p-3 hover:bg-blue-600 rounded-lg transition duration-200"
              >
                <UserIcon className="w-6 h-6 mr-3" />
                Users
              </Link>
              <Link
                to="/settings"
                className="flex items-center p-3 hover:bg-blue-600 rounded-lg transition duration-200"
              >
                <Cog6ToothIcon className="w-6 h-6 mr-3" />
                Settings
              </Link>
            </nav>
          </div>
          <button className="flex items-center p-3 hover:bg-blue-600 rounded-lg transition duration-200">
            <ArrowRightOnRectangleIcon className="w-6 h-6 mr-3" />
            Logout
          </button>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <div className="bg-white p-6 rounded-lg flex justify-between items-center shadow mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Link to="/AddNewUser">
              <button className="font-semibold text-lg bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition duration-200">
                Add New User
              </button>
            </Link>
          </div>

          {/* User List */}
          <div>
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            {users.length === 0 ? (
              <p className="text-gray-600">No users added yet.</p>
            ) : (
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">Phone</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Address
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.email}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.phone}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.address}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
