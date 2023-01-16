import React from "react";
import SectionDivider from "./SectionDivider";
import SideBarInfoSection from "./SideBarInfoSection";

function SideBarBody() {
  return (
    <div className="h-40 px-8">
      <SideBarInfoSection />
      <SectionDivider />
    </div>
  );
}

export default SideBarBody;
