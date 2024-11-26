import React, { useState } from 'react';
import { roles, permissions } from '../data';
import { FaPlus } from "react-icons/fa";
import {toast} from "react-hot-toast"

const RoleManagement = () => {
  const [roleList, setRoleList] = useState(roles);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState({ id: null, name: '', permissions: [] });

  const handleAddRole = () => {
    setCurrentRole({ id: null, name: '', permissions: [] });
    setIsModalOpen(true);
  };

  const handleEditRole = (role) => {
    setCurrentRole(role);
    setIsModalOpen(true);
  };

  const handleSaveRole = () => {
    if (currentRole.id) {
      setRoleList(
        roleList.map((role) => (role.id === currentRole.id ? currentRole : role))
      );
    } else {
      setRoleList([...roleList, { ...currentRole, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setCurrentRole({ id: null, name: '', permissions: [] });
  };

  const handleDeleteRole = (roleId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this role?');
    if (confirmDelete) {
      setRoleList(roleList.filter((role) => role.id !== roleId));
      toast.success("Role deleted successfully!",
        {
          icon: '🗑️',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    }
  };

  return (
<div className="p-6 min-h-screen">
  <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#083270] via-[#13F287] to-[#5CA0DE] text-center">
    Roles Dashboard
  </h2>

  {/* Add Role Button */}
  <div className="flex justify-end mb-4">
    <button
      onClick={handleAddRole}
      className="bg-blue-500 bg-gradient-to-r from-[#083270] to-[#0F60D6] text-white p-4 w-12 h-12 rounded-full hover:bg-blue-700 transition duration-200 shadow"
    >
      <FaPlus />
    </button>
  </div>

  {/* Table */}
  <div className="overflow-x-auto rounded shadow-lg">
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left text-sm font-semibold text-[#B2B2B2]">
            Role
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-[#B2B2B2]">
            Permissions
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-[#B2B2B2]">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {roleList.map((role) => (
          <tr key={role.id} className="border-b hover:bg-gray-800">
            <td className="px-4 py-2 text-sm text-white">{role.name}</td>
            <td className="px-4 py-2 text-sm text-white">
              {role.permissions.join(", ") || "No Permissions"}
            </td>
            <td className="px-4 py-2 flex flex-wrap gap-3">
              <button
                onClick={() => handleEditRole(role)}
                className="outline outline-[#0F60D6] text-[#0F60D6] px-3 py-1 rounded-full"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteRole(role.id)}
                className="outline outline-[#D60F0F] text-[#D60F0F] px-3 py-1 rounded-full"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Role Modal */}
  {isModalOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-gradient-to-r from-[#2F2F2F] to-[#3B3B3B] p-6 rounded-xl shadow-lg max-w-lg w-full">
        <h3 className="text-xl font-semibold mb-4 text-[#B2B2B2]">
          {currentRole.id ? "Edit Role" : "Add Role"}
        </h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#B2B2B2]">
            Role Name
          </label>
          <input
            type="text"
            value={currentRole.name}
            onChange={(e) =>
              setCurrentRole({ ...currentRole, name: e.target.value })
            }
            className="w-full bg-[#4A4A4A] border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#B2B2B2]">
            Permissions
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {permissions.map((perm) => (
              <div key={perm} className="flex items-center">
                <input
                  type="checkbox"
                  checked={currentRole.permissions.includes(perm)}
                  onChange={(e) => {
                    const updatedPermissions = e.target.checked
                      ? [...currentRole.permissions, perm]
                      : currentRole.permissions.filter((p) => p !== perm);
                    setCurrentRole({
                      ...currentRole,
                      permissions: updatedPermissions,
                    });
                  }}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
                />
                <label className="ml-2 text-sm text-[#B2B2B2]">{perm}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveRole}
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

export default RoleManagement;
