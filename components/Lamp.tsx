import React from "react";

function Lamp() {
  return (
    <div className="z-20">
      <div className="absolute w-4 h-4 bg-white rounded-full animate-ping"></div>
      <div className="absolute w-4 h-4 bg-brand-yellow rounded-full"></div>
    </div>
  );
}

export default Lamp;
