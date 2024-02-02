import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://namaste-javascript-handbook.vercel.app/assets/images/hero-lg-3a96cbdeb4319e72cb27373fadb11ec6.webp')",
      }}
      className="h-screen w-screen  items-center flex justify-center flex-col"
    >
      <div className="my-4">
        <h1 className="text-white text-3xl">Hello World!</h1>
        <p className="text-white my-2">
          Please Click On Below Buttons for Assignment number 1, 2 and 3.
        </p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Link to="/page/form">
          <button className="rounded-lg p-4 text-2xl bg-blue-900 shadow-lg outline  outline-red-600 hover:bg-blue-400 text-white">
            StepForm Page(1)
          </button>
        </Link>
        <Link to="/page/product">
          <button className="rounded-lg p-4 text-2xl bg-blue-900 shadow-lg outline  outline-red-600  hover:bg-blue-400 text-white">
            SortFilter Page (2,3)
          </button>
        </Link>
      </div>
    </div>
  );
};
