import React, { useState } from 'react';
import { roles, permissions } from '../data';

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
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Role Management</h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddRole}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Add Role
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Role Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Permissions</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roleList.map((role) => (
              <tr key={role.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2 text-sm text-gray-700">{role.name}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {role.permissions.join(', ') || 'No Permissions'}
                </td>
                <td className="px-4 py-2 flex space-x-3">
                  <button
                    onClick={() => handleEditRole(role)}
                    className="bg-green-500 text-white px-3 py-1 rounded shadow hover:bg-green-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteRole(role.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              {currentRole.id ? 'Edit Role' : 'Add Role'}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Role Name</label>
              <input
                type="text"
                value={currentRole.name}
                onChange={(e) =>
                  setCurrentRole({ ...currentRole, name: e.target.value })
                }
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Permissions
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {permissions.map((perm) => (
                  <div key={perm} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={currentRole.permissions.includes(perm)}
                      onChange={(e) => {
                        const updatedPermissions = e.target.checked
                          ? [...currentRole.permissions, perm]
                          : currentRole.permissions.filter((p) => p !== perm);
                        setCurrentRole({ ...currentRole, permissions: updatedPermissions });
                      }}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
                    />
                    <label className="ml-2 text-sm text-gray-700">{perm}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveRole}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
