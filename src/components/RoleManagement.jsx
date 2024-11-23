import React, { useState } from 'react';
import { roles, permissions } from '../data';

const RoleManagement = () => {
  const [roleList, setRoleList] = useState(roles);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  const handleEditClick = (role) => {
    setCurrentRole(role);
    setIsEditing(true);
  };

  const handleEditSubmit = () => {
    setRoleList(roleList.map((role) => (role.id === currentRole.id ? currentRole : role)));
    setIsEditing(false);
    setCurrentRole(null);
  };

  const handleDeleteClick = (roleId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this role?');
    if (confirmDelete) {
      setRoleList(roleList.filter((role) => role.id !== roleId));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Role Management</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Permissions</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roleList.map((role) => (
            <tr key={role.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{role.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {role.permissions.join(', ')}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                <button
                  onClick={() => handleEditClick(role)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(role.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">Edit Role</h3>
            <div className="mb-2">
              <label className="block text-sm font-medium">Role Name</label>
              <input
                type="text"
                value={currentRole.name}
                onChange={(e) => setCurrentRole({ ...currentRole, name: e.target.value })}
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Permissions</label>
              <div className="grid grid-cols-2 gap-2">
                {permissions.map((permission) => (
                  <label key={permission} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={currentRole.permissions.includes(permission)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCurrentRole({
                            ...currentRole,
                            permissions: [...currentRole.permissions, permission],
                          });
                        } else {
                          setCurrentRole({
                            ...currentRole,
                            permissions: currentRole.permissions.filter((p) => p !== permission),
                          });
                        }
                      }}
                    />
                    <span>{permission}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded"
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
