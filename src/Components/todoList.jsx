import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import HighImg from "../Assets/Priority-High.svg";
import LowImg from "../Assets/Priority-Low.svg";
import MediumImg from "../Assets/Priority-Medium.svg";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const tasksPerPage = 8;

  useEffect(() => {
    // Fetch data from the provided API endpoint and set it in the state.
    fetch("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do")
      .then((response) => response.json())
      .then((data) => {
        // Sort tasks by priority (High > Medium > Low)
        const sortedTasks = data.sort((a, b) => {
          if (a.priority === "High") return -1;
          if (a.priority === "Medium" && b.priority !== "High") return -1;
          return 1;
        });
        setTasks(sortedTasks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // Function to format the date as 'Mon DD' (e.g., 'Sep 10')
  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const renderTasks = () => {
    const startIndex = currentPage * tasksPerPage;
    const endIndex = startIndex + tasksPerPage;
    const displayedTasks = tasks.slice(startIndex, endIndex);

    return displayedTasks.map((task) => (
      <div
        key={task.id}
        className={`flex flex-col md:flex-row border-b-2 border-separate shadow-mdr border-gray-300 bg-white mb-4 ${
          task.priority === "High"
            ? "border-red-500"
            : task.priority === "Medium"
            ? "border-yellow-500"
            : "border-blue-500"
        }`}
      >
        <div className="flex flex-col w-full p-4 md:flex-row md:items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-4 h-4"
              src={getPriorityIcon(task.priority)}
              alt={`Priority: ${task.priority}`}
            />
            <h3 className=" font-bold text-black ml-3">{task.name}</h3>
          </div>
          <div className="text-black mt-2 md:mt-0 mx-3">{task.todo}</div>
          {task.status === "In Progress" && (
            <div>
              <button className="text-pink-400 py-2 px-4 rounded-md">
                Mark as done
              </button>
            </div>
          )}
          <div className=" flex text-gray-600 mt-2 md:mt-0 justify-end">
            {formatDate(task.createdAt)}
          </div>
        </div>
      </div>
    ));
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "High":
        return HighImg;
      case "Medium":
        return MediumImg;
      case "Low":
        return LowImg;
      default:
        return null;
    }
  };

  return (
    <div
      style={{ width: "656px" }}
      className="container mx-auto p-4 box-border bg-white shadow-xl rounded-lg"
    >
      <h3 className="mb-2 text-xl font-semibold tracking-tight text-black">
        Tasks
      </h3>
      {renderTasks()}
      <ReactPaginate
        pageCount={Math.ceil(tasks.length / tasksPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={
          "pagination flex justify-center items-center mt-4 gap-2 box-border"
        }
        activeClassName={"active"}
      />
    </div>
  );
}
