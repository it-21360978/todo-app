import React from "react";
import Vector from "../Assets/Vector.svg";

export default function hero() {
  const backgroundImageStyle = {
    backgroundImage: `url(${Vector})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div
        style={backgroundImageStyle}
        className="flex flex-col items-center rounded-lg shadow md:flex-row w-auto bg-white"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
            Welcome back, John Doe
          </h3>
          <p className="mb-3 font-normal text-gray-500">
            The end of the year is coming. Are you planning your performance
            interviews? You can do this super efficiently with Acmy.
            <span className="text-red-600 flex flex-col underline">
              Look here for more information
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
