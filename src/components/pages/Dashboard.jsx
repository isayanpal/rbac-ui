import React, { useState } from "react";
import Tab from "../ui/Tab";
import UserManagement from "../UserManagement";
import RoleManagement from "../RoleManagement";

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState("users");
  return (
    <main className="container flex flex-col items-center mt-10">
      {/* heading */}
      <div>
        <h1 className="text-xl underline text-white decoration-[#13F287]">
          Dashboard
        </h1>
      </div>

      {/* tabs */}
      <div className="mt-10">
        <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>

      {/* dashboard content */}
      <div className="container">
        {currentTab === "users" ? <UserManagement /> : <RoleManagement />}
      </div>
    </main>
  );
}
