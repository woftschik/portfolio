import React from "react";

interface PropType {
  name: string;
  value: string;
}

function SideBarInfoSection(props: PropType) {
  return (
    <div className="flex py-3">
      <div className="w-8 h-5 -ml-8 bg-brand-yellow"></div>
      <div className="flex w-full justify-between pl-5 text-sm">
        <p className="text-white">{props.name}</p>
        <p className="text-textgray">{props.value}</p>
      </div>
    </div>
  );
}

export default SideBarInfoSection;
