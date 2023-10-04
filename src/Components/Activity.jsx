import React from "react";
import avatar from "../Assets/Avatar-1.svg";
import avatar2 from "../Assets/Avatar-2.svg";

export default function Activity() {
  return (
    <div>
      <div>
        <div
          style={{ width: "440px" }}
          className="flex flex-col items-center rounded-lg shadow-lg border-1 bg-white border-black md:flex-row w-auto"
        >
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex box-border border-b-2 border-spacing-2 mb-4">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-black">
                Activity Feed
              </h3>
            </div>
            <div className="flex box-border border-b-2 border-separate shadow-mdr">
              <img className="ml-2 gap-2 w-8 h-8" src={avatar} alt="" />
              <div className="ml-6">
                Kushantha Charuka{" "}
                <span style={{ color: "#BC006D" }}>
                  created Contract #00124 need John Beige’s signature
                </span>
                <p
                  style={{ color: "#757575" }}
                  className="flex-col text-sm mt-2 mb-3"
                >
                  Sep 16, 2022 at 11:30 AM
                </p>
              </div>
            </div>

            <div className="flex box-border border-b-2 border-separate shadow-mdr mt-3">
              <img className="ml-2 gap-2 w-8 h-8" src={avatar2} alt="" />
              <div className="ml-6">
                Lorem ipsum <span className=" font-bold">dolor sit amet,</span>{" "}
                consectetur adipiscing elit.{" "}
                <span className=" font-bold">Maecenas</span> pretium neque
                <p
                  style={{ color: "#757575" }}
                  className="flex-col text-sm mt-2 mb-3"
                >
                  Sep 16, 2022 at 11:30 AM
                </p>
              </div>
            </div>

            <div className="flex box-border border-b-2 border-separate shadow-mdr mt-3">
              <img className="ml-2 gap-2 w-8 h-8" src={avatar2} alt="" />
              <div className="ml-6">
                Lorem ipsum <span className=" font-bold">dolor sit amet,</span>{" "}
                consectetur adipiscing elit.{" "}
                <span className=" font-bold">Maecenas</span> pretium neque
                <p
                  style={{ color: "#757575" }}
                  className="flex-col text-sm mt-2 mb-3"
                >
                  Sep 16, 2022 at 11:30 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
