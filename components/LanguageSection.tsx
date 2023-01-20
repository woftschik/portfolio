import React from "react";
import LanguageTacho from "./CircularProgressBarSection";

function LanguageSection() {
  return (
    <div className="">
      <p className="text-white font-lato-bold pb-8 ">Languages</p>
      <div className="flex justify-between">
        <LanguageTacho text={"German"} percentage={100} />
        <LanguageTacho text={"Russian"} percentage={80} />
        <LanguageTacho text={"English"} percentage={60} />
      </div>
    </div>
  );
}

export default LanguageSection;
