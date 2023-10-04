import React from "react";

export default function Prioritize() {
  return (
    <div>
      <div>
        <div>
          <div
            style={{ width: "440px" }}
            className="flex flex-col items-center rounded-lg shadow-lg border-1 bg-white border-black md:flex-row w-auto"
          >
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="flex box-border border-b-2 border-spacing-2 mb-4">
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-black">
                  Tasks Priorities
                </h3>
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  borderRadius: "2px",
                  boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                  width: "400px",
                }}
              >
                <iframe
                  width="400px"
                  height="275"
                  src="https://charts.mongodb.com/charts-institite-management-syst-znrlt/embed/charts?id=651d6fba-e07f-4453-8c02-b8058e8ff7b0&maxDataAge=-1&theme=light&autoRefresh=false"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
