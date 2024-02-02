import React from "react";
import { COMPLETE } from "../constants";

const Result = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 text-center mt-28">
      <div>
        <img src={COMPLETE} alt="Thank you" />
      </div>
      <div className="font-bold text-[#02295a] text-3xl">Thank you!</div>
      <p className="text-[#9699ab] text-[14px] w-96">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support. Please feel free to email us at
      </p>
    </div>
  );
};

export default Result;