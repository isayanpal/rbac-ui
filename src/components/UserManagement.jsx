import React, { useState } from "react";
import { users, roles } from "../data";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const UserManagement = () => {
  const [userList, setUserList] = useState(users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser , setCurrentUser ] = useState({
    id: null,
    name: "",
    email: "",
    role: "",
    status: ""
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddUser  = () => {
    setCurrentUser ({ id: null, name: "", email: "", role: "", status: "" });
    setIsModalOpen(true);
  };

  const handleEditUser  = (user) => {
    setCurrentUser (user);
    setIsModalOpen(true);
  };

  const handleSaveUser  = () => {
    if (currentUser .id) {
      setUserList(
        userList.map((user) =>
          user.id === currentUser .id ? currentUser  : user
        )
      );
    } else {
      setUserList([...userList, { ...currentUser , id: Date.now() }]);
    }
    setIsModalOpen(false);
    setCurrentUser ({ id: "", name: "", email: "", role: "", status: "" });
  };

  const handleDeleteUser  = (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      setUserList(userList.filter((user) => user.id !== userId));
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
<div className="p-4 sm:p-6 min-h-screen">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#083270] via-[#13F287] to-[#5CA0DE] text-center">
    Users Dashboard
  </h2>

  <div className="flex flex-col sm:flex-row sm:justify-between mb-4 gap-4 items-center">
    {/* Search bar */}
    <form className="flex items-center gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
      <div className="flex-grow bg-[#4A4A4A] rounded-full p-3">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full bg-transparent text-white outline-none"
          placeholder="Search by name"
        />
      </div>
      <button
        type="submit"
        className="bg-[#4A4A4A] rounded-full p-3 text-center text-white"
      >
        <FaMagnifyingGlass />
      </button>
    </form>

    {/* Add User Button */}
    <button
      onClick={handleAddUser}
      className="flex items-center justify-center bg-gradient-to-r from-[#083270] to-[#0F60D6] text-white p-4 w-12 h-12 rounded-full shadow hover:bg-blue-700 transition duration-200"
    >
      <FaPlus />
    </button>
  </div>

  {/* Table */}
  <div className="overflow-x-auto rounded-lg shadow-lg">
    <table className="min-w-full table-auto text-sm">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left font-semibold text-[#B2B2B2]">#</th>
          <th className="px-4 py-2 text-left font-semibold text-[#B2B2B2]">Name</th>
          <th className="px-4 py-2 text-left font-semibold text-[#B2B2B2]">Email</th>
          <th className="px-4 py-2 text-left font-semibold text-[#B2B2B2]">Role</th>
          <th className="px-4 py-2 text-left font-semibold text-[#B2B2B2]">Status</th>
          <th className="px-4 py-2 text-left font-semibold text-[#B2B2B2]">Actions</th>
        </tr>
      </thead>
      <tbody>
        {userList
          .filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((user) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-800"
            >
              <td className="px-4 py-2 text-white">{user.id}</td>
              <td className="px-4 py-2 text-white">{user.name}</td>
              <td className="px-4 py-2 text-white">{user.email}</td>
              <td className="px-4 py-2 text-white">{user.role || "No Role"}</td>
              <td className="px-4 py-2 text-white">{user.status || "No Status"}</td>
              <td className="px-4 py-2 flex space-x-2">
                <button
                  onClick={() => handleEditUser(user)}
                  className="outline outline-[#0F60D6] text-[#0F60D6] px-2 py-1 rounded-full"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="outline outline-[#D60F0F] text-[#D60F0F] px-2 py-1 rounded-full"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>

  {/* Modal */}
  {isModalOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-r from-[#2F2F2F] to-[#3B3B3B] p-6 rounded-xl shadow-lg max-w-md mx-5 w-full">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#B2B2B2]">
          {currentUser.id ? "Edit User" : "Add User"}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#B2B2B2]">
              Name
            </label>
            <input
              type="text"
              value={currentUser.name}
              onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
              className="w-full bg-[#4A4A4A] text-white px-3 py-2 rounded focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#B2B2B2]">
              Email
            </label>
            <input
              type="email"
              value={currentUser.email}
              onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
              className="w-full bg-[#4A4A4A] text-white px-3 py-2 rounded focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#B2B2B2]">
              Role
            </label>
            <select
              value={currentUser.role}
              onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
              className="w-full bg-[#4A4A4A] text-white px-3 py-2 rounded focus:ring focus:ring-blue-300"
            >
              <option value="" className="text-[#B2B2B2]">Select Role</option>
              {roles.map((role) => (
                <option key={role.id} value={role.name}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#B2B2B2]">
              Status
            </label>
            <input
              type="text"
              value={currentUser.status}
              onChange={(e) => setCurrentUser({ ...currentUser, status: e.target.value })}
              className="w-full bg-[#4A4A4A] text-white px-3 py-2 rounded focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveUser}
            className="bg-[#13F287] text-black px-4 py-2 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default UserManagement;