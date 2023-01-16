import React from "react";
import Image from "next/image";
import avatar from "../public/images/avatar.jpg";
import Lamp from "./lamp";

function SideBarHeader() {
  return (
    <div className="w-72 h-80 bg-gradient-to-br from-[rgba(35,35,46)] to-[rgba(37,37,50)] px-8 py-10 flex flex-col text-center text-sm justify-center">
      <div className="w-full flex justify-center">
        <div className="w-44 h-44 mb-5">
          <Image alt="avatar" src={avatar} className="rounded-full" />
          <div
            className="flex self-end justify-end mr-8 -mt-8"
            title="I am available for freelance hire"
          >
            <Lamp />
          </div>
        </div>
      </div>
      <h5 className="text-brand-yellow mb-2.5">
        <a href="https://w-matthies.de">WALDEMAR MATTHIES</a>
      </h5>
      <div className="text-textgray">
        Frontend Developer <br></br>
        UI/UX Designer
      </div>
    </div>
  );
}

export default SideBarHeader;
