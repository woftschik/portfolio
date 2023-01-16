import React from "react";
import SideBarHeader from "./SideBarHeader";
import SideBarBody from "./SideBarBody";

function SideBar() {
  return (
    <div className="w-72 h-full bg-theme-middlekgray">
      <SideBarHeader />
      <SideBarBody />
    </div>
  );
}

export default SideBar;
