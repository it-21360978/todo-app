import React, { useState } from "react";
import dash from "../Assets/Dashboard.svg";
import down from "../Assets/Chevron-down.svg";
import profile from "../Assets/Profile.svg";
import Not from "../Assets/Notifications.svg";
import Hero from "../Components/hero";
import Todo from "../Components/todoList";
import Activity from "../Components/Activity";
import Prior from "../Components/prioritize";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <div>
      <div style={{ backgroundColor: "#FAFAFA" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: "272px",
            height: "100vh",
            backgroundColor: "#33074F",
          }}
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40  transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white border-r border-gray-200 sm:translate-x-0 bg33074F`}
          aria-label="Sidebar"
        >
          {/* ... Your sidebar content ... */}

          <div
            style={{
              width: "272px",
              height: "80px",
              backgroundColor: "#461D5F",
            }}
            className="box-border py-6 p-3 sm:mt-24 lg:mt-0"
          >
            <h3 className="flex justify-center text-white text-2xl">
              Acmy Solutions
            </h3>
          </div>

          <div
            style={{
              width: "240px",
              height: "40px",
              backgroundColor: "#461D5F",
            }}
            className=" mt-14 box-border m-auto rounded-xl translate-y-full"
          >
            <div className=" flex items-center justify-center text-white m-auto py-2 px-3 gap-4">
              <img src={dash} className=" w-6 h-6" alt="logo" />
              Dashboard
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className={`p-4 sm:ml-64 ${sidebarOpen ? "ml-0" : ""}`}>
          <div className="p-4 rounded-lg mt-24 ml-5">
            {/* ... Your content ... */}
            <Hero />

            <div className=" grid grid-cols-2 mt-10 lg:gap-36 ">
              <div>
               
                <Todo />
              </div>

              <div className=" lg:mx-auto grid grid-cols-1 grid-rows-2 lg:ml-10 ">
                <div className="">
                  <Activity />
                </div>
                <div className=" lg:mt-8">
                  <Prior />
                </div>
              </div>
            </div>

            {/* Navigation Bar */}
            <nav
              style={{
                minWidth: "320px",
                maxWidth: "calc(100% - 272px)",
                maxHeight: "80px",
              }}
              className={`fixed top-0 mx-auto z-50 sm:w-screen md:w-screen lg:pr-8 lg:w-screen lg:mr-8 bg-white border-b border-gray-200 shadow-md${
                sidebarOpen ? "lg:pl-3" : "lg:px-5"
              }`}
            >
              <div className="px-2 py-6 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start sm:mt-24 lg:mt-0 ">
                    <button
                      onClick={toggleSidebar}
                      data-drawer-target="logo-sidebar"
                      data-drawer-toggle="logo-sidebar"
                      aria-controls="logo-sidebar"
                      type="button"
                      className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:mt-24 lg:mt-0"
                    >
                      <span className="sr-only sm:mt-24 lg:mt-0">
                        Open sidebar
                      </span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                      </svg>
                    </button>
                    <h4>
                      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Dashboard
                      </span>
                    </h4>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="flex items-center ml-3 gap-7">
                      <img src={Not} className=" flex w-6 h-6" alt="logo" />
                      <div>
                        <button
                          onClick={toggleUserMenu}
                          type="button"
                          className="flex text-sm rounded-full gap-2 justify-items-end items-end"
                          aria-expanded={userMenuOpen ? "true" : "false"}
                          data-dropdown-toggle="dropdown-user"
                        >
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="w-10 h-10 rounded-full"
                            src={profile}
                            alt="user photo"
                          />
                          <img src={down} className=" flex mt-2" alt="logo" />
                        </button>
                      </div>
                      <div
                        className={`z-50 absolute top-full right-0 mt-2 text-base list-none bg-white divide-y divide-gray-100 pr-14 ${
                          userMenuOpen ? "block" : "hidden"
                        }`}
                        id="dropdown-user"
                      >
                        <div className="px-4 py-3 pr-4" role="none">
                          <p
                            className="text-sm text-gray-900 dark:text-white"
                            role="none"
                          >
                            Jhone doe
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
