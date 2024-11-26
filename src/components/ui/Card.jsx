import React from "react";

const Card = ({ icon, description }) => {
  return (
    <div
      className={`w-64 h-72 p-6 rounded-lg bg-gradient-to-r from-[#2F2F2F] to-[#3B3B3B] shadow-lg text-white relative overflow-hidden`}
    >
      <div className="flex flex-col z-20">
        <div className="text-[#13F287] text-6xl mb-10 self-center">{icon}</div>

        <p className="text-[#A9A9A9] text-sm">{description}</p>
      </div>
      {/* Gradient Effect */}
      <div className="absolute z-10 bottom-0 -right-5 w-20 h-20 bg-[#13F287] rounded-full opacity-90 blur-2xl" />
    </div>
  );
};

export default Card;
