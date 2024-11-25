import React, { useState } from 'react';
import { users, roles } from '../data';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const UserManagement = () => {
  const [userList, setUserList] = useState(users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser , setCurrentUser ] = useState({
    id: null,
    name: '',
    email: '',
    role: '',
  });

  const handleAddUser  = () => {
    setCurrentUser ({ id: null, name: '', email: '', role: '' });
    setIsModalOpen(true);
  };

  const handleEditUser  = (user) => {
    setCurrentUser (user);
    setIsModalOpen(true);
  };

  const handleSaveUser  = () => {
    if (currentUser .id) {
      setUserList(
        userList.map((user) => (user.id === currentUser .id ? currentUser  : user))
      );
    } else {
      setUserList([...userList, { ...currentUser , id: Date.now() }]);
    }
    setIsModalOpen(false);
    setCurrentUser ({ id: '', name: '', email: '', role: '' });
  };

  const handleDeleteUser  = (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      setUserList(userList.filter((user) => user.id !== userId));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">User  Management</h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddUser }
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200"
        >
          <FaPlus className="mr-2" /> Add User
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Email</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Role</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={user.id} className={`border-b hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                <td className="px-4 py-2 text-sm text-gray-700">{user.name}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{user.email}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{user.role || 'No Role'}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button
                    onClick={() => handleEditUser (user)}
                    className="bg-green-500 text-white px-3 py-1 rounded shadow hover:bg-green-600 transition duration-200"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteUser (user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600 transition duration-200"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ div>

      {/* User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              {currentUser .id ? 'Edit User' : 'Add User'}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                value={currentUser .name}
                onChange={(e) =>
                  setCurrentUser ({ ...currentUser , name: e.target.value })
                }
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                value={currentUser .email}
                onChange={(e) =>
                  setCurrentUser ({ ...currentUser , email: e.target.value })
                }
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Role</label>
              <select
                value={currentUser .role}
                onChange={(e) =>
                  setCurrentUser ({ ...currentUser , role: e.target.value })
                }
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Select Role</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.name}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUser }
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
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