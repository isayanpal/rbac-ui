import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Card from "../ui/Card";
import { HiUserGroup } from "react-icons/hi2";
import { RiShieldUserFill } from "react-icons/ri";

export default function LandingPage() {
  return (
    <main className="container flex items-center flex-col mt-10">
      <div className="text-white font-light sm:text-2xl text-sm">
        Streamline User Management with
      </div>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#083270] via-[#13F287] to-[#5CA0DE] sm:text-4xl text-lg font-extrabold text-center">
        Powerful Role-Based Access Control
      </div>
      <div className="mt-5 text-[#7F7F7F] sm:text-base text-[10px] text-center">
        Efficiently Manage Access Rights with a{" "}
        <span className="text-[#13F287]">Secure </span>
        and <span className="text-[#13F287]">Dynamic </span>
        Dashboard.
      </div>

      <Link to={"/dashboard"}>
        <button className="flex items-center gap-1 font-normal bg-[#13F287] hover:shadow-lg hover:shadow-[#13F287] hover:scale-110 text-black px-3 py-2 text-sm rounded-full mt-10">
          Enter app <FaArrowRight />
        </button>
      </Link>

      <div className="mt-8 flex sm:flex-row flex-col gap-5">
        <Card
          icon={<HiUserGroup />}
          description="Define custom attributes and 
permissions to ensure the right
users have the right access 
at the right time."
        />
        <Card
          icon={<RiShieldUserFill />}
          description="Customize access rights based 
on your unique organizational 
needs."
        />
      </div>
    </main>
  );
}
