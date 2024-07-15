/// import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { FaRegFileImage } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { BsBagCheck } from "react-icons/bs";
import { FcAcceptDatabase } from "react-icons/fc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaFolderClosed } from "react-icons/fa6";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="flex w-16 h-dvh bg-white shadow-md absolute">
      <div className="flex w-full flex-col gap-4 items-center ">
        <div className="">👋</div>
        <div className="w-5 h-5 rounded-2xl bg-slate-200 flex items-center ml-16">
          <IoMdArrowDropright />
        </div>
        <div className="cursor-pointer">
          <FaRegFileImage />
        </div>
        <div className="cursor-pointer">
          <FcInfo />
        </div>
        <div className="cursor-pointer">
          <BsBagCheck />
        </div>
        <div className="cursor-pointer">
          <FcAcceptDatabase />
        </div>
        <div className="cursor-pointer">
          <IoMdNotificationsOutline />
        </div>
        <div className="cursor-pointer">
          <FaFolderClosed />
        </div>
        <div className="cursor-pointer">
          <MdOutlineFolderSpecial />
        </div>
        <div className="cursor-pointer">
          <HiOutlineAcademicCap />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
