import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
export default function Header() {
  return (
    <nav className="w-full m-auto px-10 py-5 flex flex-row justify-between items-center">
      <Link to={"/"}>
        <div className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#083270] via-[#13F287] to-[#5CA0DE]">
          RBAC
        </div>
      </Link>
      <Link to={"/dashboard"}>
        <button className="flex items-center gap-1 font-normal bg-gradient-to-r from-[#2F2F2F] to-[#3B3B3B] text-white px-3 py-2 rounded-full text-sm">
          Enter app <FaArrowRight />
        </button>
      </Link>
    </nav>
  );
}
