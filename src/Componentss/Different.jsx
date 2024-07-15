import React from 'react'
import { IoDiamondOutline } from "react-icons/io5";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import man1 from "./images/man1.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import rec from "./images/rectangle.png";
import star from "./images/Star 1.png";
import oct from "./images/Polygon 1.png"
import vector from './images/Vector.png'
const Different = () => {
  return (
    <div>
      <div className="w-full mb-3">
        <Container className="gap-3">
          <Row className="h-36 gap-3">
            <Col className="h-full rounded-xm">
              <div className="relative">
                <img className="w-full h-36" src={rec} alt="" />
                <div className="absolute top-0">
                  <div className="m-4">
                    <img className="ml-4" src={star} alt="" />
                    <p className="text-white w-64 ml-16 -mt-7">
                      120 Premium members received job opportunities this week
                    </p>
                    <div className="flex fex-row items-center">
                      <img src={oct} alt="" className='relative  w-14'/>
                      <img src={vector} alt="" className='absolute ml-3 w-8'/>
                    <h1 className='text-white text-3xl font-semibold ml-4'>Go Premium</h1>
                    </div>
                  </div>
                </div>
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
                    <p className="text-indigo-700 font-semibold">3-4 LPA</p>
                  </Col>
                </Row>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col xs="2" md="2" className="">
                      <img
                        className="rounded-full"
                        src={man1}
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
  );
}

export default Different
