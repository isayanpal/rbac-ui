import React from 'react'
import { HiUserGroup } from "react-icons/hi2";
import { RiShieldUserFill } from "react-icons/ri";
export default function Tab({currentTab,setCurrentTab}) {
  return (
    <div className="flex space-x-4 mb-6 bg-gradient-to-r from-[#2F2F2F] to-[#3B3B3B] rounded-full px-4">
      <button
        onClick={() => setCurrentTab("users")}
        className={`px-6 py-2 text-[20px] flex items-center gap-1 rounded-sm font-medium transition-colors ${
          currentTab === "users"
            ? "text-[#13F287]"
            : "text-white"
        }`}
      >
        <HiUserGroup />Users
      </button>

      <button
        onClick={() => setCurrentTab("roles")}
        className={`px-6 py-2 text-[20px] flex items-center gap-1 rounded-sm font-medium transition-colors ${
          currentTab === "roles"
            ? "text-[#13F287]"
            : "text-white"
        }`}
      >
        <RiShieldUserFill />Roles
      </button>
    </div>
  )
}
