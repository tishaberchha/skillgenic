// leftsidebar

import React from "react";
import man1 from "./images/man1.png";
import man2 from "./images/man2.png";
import man3 from "./images/man3.png";
import man4 from "./images/man4.png";
import man5 from "./images/man5.png";
import vector from "./images/Vector.png"
import ProgressBar from "react-bootstrap/ProgressBar";
import main2 from "./images/main2.png";
import Card from "./Card";
import Designer from "./Designer";
import vector1 from './images/Vector1.png'
import tick from './images/tick.png';


export default function LeftSideBar() {

  const data = [
    {
      img: man2,
      name: "Kimeya",
      title: "AI Coordinator",
    },
    {
      img: man3,
      name: "Kimeya",
      title: "AI Coordinator",
    },
    {
      img: man4,
      name: "Kimeya",
      title: "AI Coordinator",
    },
    {
      img: man5,
      name: "Kimeya",
      title: "AI Coordinator",
    },
  ];

  return (
    <>
      <div className="w-3/4">
        <div className="h-72 bg-white mt-3 ml-20 rounded-md">
          <div className="flex flex-col">
            <div className="min-h-7 flex items-center ml-36 mt-2">
              <img src={vector} className="h-5" alt="" />
              <h1 className="font-bold ml-2">Step into the future</h1>
            </div>
            <div className="flex ml-8 mt-4">
              <div className="flex flex-col items-center mt-3 justify-center w-28 h-24">
                <img className="rounded-full" src={man1} alt="Logo" />
                <p
                  style={{ backgroundColor: "#4234A2" }}
                  className="w-10 h-7 text-xs text-white flex items-center justify-center rounded-md -mt-2"
                >
                  5%
                </p>
              </div>
              <div className="flex flex-row gap-3">
                {data.map((data) => {
                  return (
                    <Card
                      key={data.name}
                      img={data.img}
                      name={data.name}
                      title={data.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <hr className='w-96 ml-52 -mt-7' style={{fontSize:"10px"}}/> */}
          <ProgressBar
            className="w-96 ml-64 -mt-7 text-sm"
            style={{
              height: "4px",
              backgroundColor: "darkblue",
              marginLeft: "290px",
            }}
            now={0}
            label={`${0}%`}
            visuallyHidden
          />
        </div>

        <div className="bg-white mt-16 ml-20 rounded-xl p-4">
          <div className="flex flex-col gap-6 w-full h-16 justify-center items-center align-middle">
            <div className="flex flex-row gap-6">
              <p>All Jobs</p>
              <p>My Jobs</p>
              <p>My Interview</p>
            </div>
            <div>
              <ProgressBar
                className="w-96 -mt-2"
                style={{
                  height: "3px",
                }}
                now={20}
                label={`${20}%`}
                visuallyHidden
              />
            </div>
          </div>

          <div className="p-4 flex ">
            <input
              className="w-full h-8 bg-neutral-100 p-3 rounded-md"
              type="text"
              placeholder="Search Opportunities"
            />

            <p className="-ml-16 text-violet-950">View All</p>
          </div>
          <div>
            <Designer />
          </div>
        </div>
      </div>

      <div className="w-80 h-72 gap-3 ml-6 rounded-md">
        <div className="relative">
          <img src={main2} alt="" />
          <div className="absolute top-0">
            <div className="flex flex-col justify-center align-middle items-center mt-4 ">
              <div>
                <img src={vector1} className="ml" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="w-44  text-white mt-4 font-bold ml-7">
                  Unleash your Career
                </h1>
                <p className="text-white font-bold ml-3">Potential</p>
              </div>
              <div className="flex items-center">
                <p className="text-white mt-3">Premium Career Solutions</p>
              </div>
              <div className="w-full h-full flex p-1 flex-row gap-2 mt-4  ">
                <div style={{ width: "50%" }} className="flex gap-2">
                  <img src={tick} alt="" />
                  <p className="text-white text-xs">Al Career Counselor</p>
                </div>

                <div style={{ width: "50%" }} className="flex gap-2">
                  <img src={tick} alt="" />
                  <p className="text-white text-xs">Al Career Counselor</p>
                </div>
              </div>
              <div className="w-full h-full flex p-1 flex-row gap-2  ">
                <div style={{ width: "50%" }} className="flex gap-2">
                  <img src={tick} alt="" />
                  <p className="text-white text-xs">Al Career Counselor</p>
                </div>

                <div style={{ width: "50%" }} className="flex gap-2">
                  <img src={tick} alt="" />
                  <p className="text-white text-xs">Al Career Counselor</p>
                </div>
              </div>
              <div className="w-full h-full flex p-1 flex-row gap-2">
                <div style={{ width: "50%" }} className="flex gap-2">
                  <img src={tick} alt="" />
                  <p className="text-white text-xs">Al Career Counselor</p>
                </div>

                <div style={{ width: "50%" }} className="flex gap-2">
                  <img src={tick} alt="" />
                  <p className="text-white text-xs">Al Career Counselor</p>
                </div>
              </div>
              <button className="bg-white w-full h-10 ml-5 mt-3 text-semibold rounded">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
