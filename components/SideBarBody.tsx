import React from "react";
import SectionDivider from "./SectionDivider";
import SideBarInfoSection from "./SideBarInfoSection";

function SideBarBody() {
  return (
    <div className="px-8">
      <div className="py-5">
        <SideBarInfoSection name="Residence:" value="Paraguay" />
        <SideBarInfoSection name={"City:"} value={"Hohenau"} />
      </div>
      <SectionDivider />
      <div className="py-5"></div>
    </div>
  );
}

export default SideBarBody;
