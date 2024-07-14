// leftsidebar

import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import man from "./images/man1.jpg";
import man2 from "./images/man2.jpg";
import man1 from "./images/man3.jpg";
import man3 from "./images/man4.jpg";
import man4 from "./images/man5.jpg";
import man5 from "./images/man.png";
import man6 from "./images/man6.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CiSearch } from "react-icons/ci";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import btn from "./images/button.png";
import main from "./images/main.png";
import main2 from "./images/main2.png";

export default function LeftSideBar() {
  return (
    <>
      <div className="w-3/4">
        <div className="h-72 bg-white mt-3 ml-20 rounded-md">
          <div className="flex flex-col">
            <div className="min-h-7 flex items-center ml-36 mt-2">
              <IoDiamondOutline className="text-xl mr-3" />
              <h1 className="font-semibold">Step into the future</h1>
            </div>
            <div className="flex ml-8 mt-4">
              <div className="flex items-center justify-center gap-5 w-28 h-24">
                <img className="rounded-full" src={man} alt="Logo" />
              </div>

              <div className="flex w-24 h-20 ml-16 flex-col justify-center items-center mt-5">
                <img className="rounded" src={man2} />
                <p style={{ fontSize: "15px" }}>Kimeya</p>
                <p className="text-sm">AI Coordinator</p>
                <Button
                  style={{ fontSize: "8px" }}
                  className="h-5 flex items-center text-xs bg-blue-900"
                  variant="primary"
                >
                  RS 399 per session
                </Button>{" "}
              </div>
              <div className="flex w-28 h-20 ml-16 flex-col justify-center items-center mt-5">
                <img className="rounded" src={man3} />
                <p style={{ fontSize: "15px" }}>Kimeya</p>
                <p className="text-sm">AI Coordinator</p>
                <Button
                  style={{ fontSize: "8px" }}
                  className="h-5 flex items-center text-xs bg-blue-900"
                  variant="primary"
                >
                  RS 399 per session
                </Button>{" "}
              </div>
              <div className="flex w-28 h-24 ml-16 flex-col justify-center items-center mt-5">
                <img className="rounded" src={man4} />
                <p style={{ fontSize: "15px" }}>Kimeya</p>
                <p className="text-sm">AI Coordinator</p>
                <Button
                  style={{ fontSize: "8px" }}
                  className="h-5 flex items-center text-xs bg-blue-900"
                  variant="primary"
                >
                  RS 399 per session
                </Button>{" "}
              </div>
              <div className="flex w-28 h-24 ml-16 flex-col justify-center items-center mt-5">
                <img className="rounded" src={man6} />
                <p style={{ fontSize: "15px" }}>Kimeya</p>
                <p className="text-sm">AI Coordinator</p>
                <Button
                  style={{ fontSize: "8px" }}
                  className="h-5 flex items-center text-xs bg-blue-900"
                  variant="primary"
                >
                  RS 399 per session
                </Button>{" "}
              </div>
              {/* <div className="flex w-24 h-20 ml-16 flex-col justify-center items-center mt-5">
                <img className="rounded" src={man2} />
                <p style={{ fontSize: "15px" }}>Kimeya</p>
                <p className="text-sm">AI Coordinator</p>
                <Button
                  style={{ fontSize: "8px" }}
                  className="h-5 flex items-center text-xs bg-blue-900"
                  variant="primary"
                >
                  RS 399 per session
                </Button>{" "}
              </div> */}
            </div>
          </div>
        </div>
        <div>
          {/* <hr className='w-96 ml-52 -mt-7' style={{fontSize:"10px"}}/> */}
          <ProgressBar
            className="w-96 ml-64 -mt-7 text-sm"
            style={{
              height: "3px",
              backgroundColor: "darkblue",
              marginLeft: "290px",
            }}
            now={0}
            label={`${0}%`}
            visuallyHidden
          />
        </div>

        <div
          className="bg-white mt-16 ml-20 rounded-md p-4"
          // style={{ height: "600px" }}
        >
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

            <p className="-ml-16 via-violet-950">View All</p>
          </div>

          <div className="w-full h-3/4">
            <div className="w-full mb-3">
              <Container className="gap-3">
                <Row className="h-36 gap-3">
                  <Col className="w-1/2 h-full bg-gray-50 rounded-xm p-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-bold">Graphic Designer</p>
                      <IoShareSocialOutline />
                    </div>
                    <div className="flex items-center">
                      <IoLocationOutline />
                      <p className="text-sm">Jaipur</p>
                    </div>
                    <div className="p-3">
                      <Row className="gap-3">
                        <Col
                          className="text-sm border rounded flex items-center gap-1"
                          xs="6"
                          md="5"
                        >
                          <GoHome /> Work From Home
                        </Col>
                        <Col
                          md="auto"
                          className="text-sm border rounded flex items-center gap-1"
                        >
                          <SlCalender /> 1-3 Year
                        </Col>
                        <Col xs lg="3" className="text-sm rounded border">
                          <p className="text-indigo-700 font-semibold">
                            3-4 LPA
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Container>
                        <Row>
                          <Col xs="2" md="2" className="">
                            <img
                              className="rounded-full"
                              src={man}
                              width={40}
                              height={40}
                              alt=""
                            />
                          </Col>
                          <Col xs="8" md="6" className="flex flex-col text-sm">
                            <p className="font-thin">Deepika</p>
                            <p>Magneto Cleantech</p>
                          </Col>
                          <Col className="-ml-4">
                            <button className="border bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-24 text-white text-sm p-1">
                              Apply Now
                            </button>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                  <Col className="w-1/2 h-full bg-gray-50 rounded-xm p-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-bold">Graphic Designer</p>
                      <IoShareSocialOutline />
                    </div>
                    <div className="flex items-center">
                      <IoLocationOutline />
                      <p className="text-sm">Jaipur</p>
                    </div>
                    <div className="p-3">
                      <Row className="gap-3">
                        <Col
                          className="text-sm border rounded flex items-center gap-1"
                          xs="6"
                          md="5"
                        >
                          <GoHome /> Work From Home
                        </Col>
                        <Col
                          md="auto"
                          className="text-sm border rounded flex items-center gap-1"
                        >
                          <SlCalender /> 1-3 Year
                        </Col>
                        <Col xs lg="3" className="text-sm rounded border">
                          <p className="text-indigo-700 font-semibold">
                            3-4 LPA
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Container>
                        <Row>
                          <Col xs="2" md="2" className="">
                            <img
                              className="rounded-full"
                              src={man}
                              width={40}
                              height={40}
                              alt=""
                            />
                          </Col>
                          <Col xs="8" md="6" className="flex flex-col text-sm">
                            <p className="font-thin">Deepika</p>
                            <p>Magneto Cleantech</p>
                          </Col>
                          <Col className="-ml-4">
                            <button className="border bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-24 text-white text-sm p-1">
                              Apply Now
                            </button>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="w-full mb-3">
              <Container className="gap-3">
                <Row className="h-36 gap-3">
                  <Col className="h-full bg-gray-50 rounded-xm">
                    <div>
                      <img src={main} className="w-full h-36" alt="" />
                    </div>
                  </Col>
                  <Col className="w-1/2 h-full bg-gray-50 rounded-xm p-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-bold">Graphic Designer</p>
                      <IoShareSocialOutline />
                    </div>
                    <div className="flex items-center">
                      <IoLocationOutline />
                      <p className="text-sm">Jaipur</p>
                    </div>
                    <div className="p-3">
                      <Row className="gap-3">
                        <Col
                          className="text-sm border rounded flex items-center gap-1"
                          xs="6"
                          md="5"
                        >
                          <GoHome /> Work From Home
                        </Col>
                        <Col
                          md="auto"
                          className="text-sm border rounded flex items-center gap-1"
                        >
                          <SlCalender /> 1-3 Year
                        </Col>
                        <Col xs lg="3" className="text-sm rounded border">
                          <p className="text-indigo-700 font-semibold">
                            3-4 LPA
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Container>
                        <Row>
                          <Col xs="2" md="2" className="">
                            <img
                              className="rounded-full"
                              src={man}
                              width={40}
                              height={40}
                              alt=""
                            />
                          </Col>
                          <Col xs="8" md="6" className="flex flex-col text-sm">
                            <p className="font-thin">Deepika</p>
                            <p>Magneto Cleantech</p>
                          </Col>
                          <Col className="-ml-4">
                            <button className="border bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-24 text-white text-sm p-1">
                              Apply Now
                            </button>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="w-full mb-3">
              <Container className="gap-3">
                <Row className="h-36 gap-3">
                  <Col className="w-1/2 h-full bg-gray-50 rounded-xm p-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-bold">Graphic Designer</p>
                      <IoShareSocialOutline />
                    </div>
                    <div className="flex items-center">
                      <IoLocationOutline />
                      <p className="text-sm">Jaipur</p>
                    </div>
                    <div className="p-3">
                      <Row className="gap-3">
                        <Col
                          className="text-sm border rounded flex items-center gap-1"
                          xs="6"
                          md="5"
                        >
                          <GoHome /> Work From Home
                        </Col>
                        <Col
                          md="auto"
                          className="text-sm border rounded flex items-center gap-1"
                        >
                          <SlCalender /> 1-3 Year
                        </Col>
                        <Col xs lg="3" className="text-sm rounded border">
                          <p className="text-indigo-700 font-semibold">
                            3-4 LPA
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Container>
                        <Row>
                          <Col xs="2" md="2" className="">
                            <img
                              className="rounded-full"
                              src={man}
                              width={40}
                              height={40}
                              alt=""
                            />
                          </Col>
                          <Col xs="8" md="6" className="flex flex-col text-sm">
                            <p className="font-thin">Deepika</p>
                            <p>Magneto Cleantech</p>
                          </Col>
                          <Col className="-ml-4">
                            <button className="border bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-24 text-white text-sm p-1">
                              Apply Now
                            </button>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                  <Col className="w-1/2 h-full bg-gray-50 rounded-xm p-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-bold">Graphic Designer</p>
                      <IoShareSocialOutline />
                    </div>
                    <div className="flex items-center">
                      <IoLocationOutline />
                      <p className="text-sm">Jaipur</p>
                    </div>
                    <div className="p-3">
                      <Row className="gap-3">
                        <Col
                          className="text-sm border rounded flex items-center gap-1"
                          xs="6"
                          md="5"
                        >
                          <GoHome /> Work From Home
                        </Col>
                        <Col
                          md="auto"
                          className="text-sm border rounded flex items-center gap-1"
                        >
                          <SlCalender /> 1-3 Year
                        </Col>
                        <Col xs lg="3" className="text-sm rounded border">
                          <p className="text-indigo-700 font-semibold">
                            3-4 LPA
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Container>
                        <Row>
                          <Col xs="2" md="2" className="">
                            <img
                              className="rounded-full"
                              src={man}
                              width={40}
                              height={40}
                              alt=""
                            />
                          </Col>
                          <Col xs="8" md="6" className="flex flex-col text-sm">
                            <p className="font-thin">Deepika</p>
                            <p>Magneto Cleantech</p>
                          </Col>
                          <Col className="-ml-4">
                            <button className="border bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-24 text-white text-sm p-1">
                              Apply Now
                            </button>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="w-full mb-3">
              <Container className="gap-3">
                <Row className="h-36 gap-3">
                  <Col className="w-1/2 h-full bg-gray-50 rounded-xm p-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-bold">Graphic Designer</p>
                      <IoShareSocialOutline />
                    </div>
                    <div className="flex items-center">
                      <IoLocationOutline />
                      <p className="text-sm">Jaipur</p>
                    </div>
                    <div className="p-3">
                      <Row className="gap-3">
                        <Col
                          className="text-sm border rounded flex items-center gap-1"
                          xs="6"
                          md="5"
                        >
                          <GoHome /> Work From Home
                        </Col>
                        <Col
                          md="auto"
                          className="text-sm border rounded flex items-center gap-1"
                        >
                          <SlCalender /> 1-3 Year
                        </Col>
                        <Col xs lg="3" className="text-sm rounded border">
                          <p className="text-indigo-700 font-semibold">
                            3-4 LPA
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Container>
                        <Row>
                          <Col xs="2" md="2" className="">
                            <img
                              className="rounded-full"
                              src={man}
                              width={40}
                              height={40}
                              alt=""
                            />
                          </Col>
                          <Col xs="8" md="6" className="flex flex-col text-sm">
                            <p className="font-thin">Deepika</p>
                            <p>Magneto Cleantech</p>
                          </Col>
                          <Col className="-ml-4">
                            <button className="border bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-24 text-white text-sm p-1">
                              Apply Now
                            </button>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                  <Col className="w-1/2 h-full bg-gray-50 rounded-xm p-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-bold">Graphic Designer</p>
                      <IoShareSocialOutline />
                    </div>
                    <div className="flex items-center">
                      <IoLocationOutline />
                      <p className="text-sm">Jaipur</p>
                    </div>
                    <div className="p-3">
                      <Row className="gap-3">
                        <Col
                          className="text-sm border rounded flex items-center gap-1"
                          xs="6"
                          md="5"
                        >
                          <GoHome /> Work From Home
                        </Col>
                        <Col
                          md="auto"
                          className="text-sm border rounded flex items-center gap-1"
                        >
                          <SlCalender /> 1-3 Year
                        </Col>
                        <Col xs lg="3" className="text-sm rounded border">
                          <p className="text-indigo-700 font-semibold">
                            3-4 LPA
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Container>
                        <Row>
                          <Col xs="2" md="2" className="">
                            <img
                              className="rounded-full"
                              src={man}
                              width={40}
                              height={40}
                              alt=""
                            />
                          </Col>
                          <Col xs="8" md="6" className="flex flex-col text-sm">
                            <p className="font-thin">Deepika</p>
                            <p>Magneto Cleantech</p>
                          </Col>
                          <Col className="-ml-4">
                            <button className="border bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-24 text-white text-sm p-1">
                              Apply Now
                            </button>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 h-72 gap-3 ml-6 rounded-md">
        <img src={main2} alt="" />
      </div>
    </>
  );
}
