// maincontaininer
import React from "react";
import Sidebar from "./Sidebar";
import LeftSideBar from "./LeftSidebar";

const MainContainer = () => {
  return (
    <div className="flex overflow-auto bg-cyan-50 w-dvh h-lvh">
      <Sidebar />
      <LeftSideBar />
    </div>
  );
};

export default MainContainer;
