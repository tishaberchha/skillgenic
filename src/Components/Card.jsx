import React from 'react'
import Button from "react-bootstrap/Button";

const Card = ({img,name,title}) => {
  return (
    <div>
      <div className="flex w-24 h-20 ml-16 flex-col justify-center items-center mt-5">
        <img className="rounded-full" src={img} alt="Logo" />
              <p style={{ fontSize: "15px" }} className='font-semibold'>{name}</p>
              <p className="text-xs">{title}</p>
        <Button style={{ fontSize: "8px",backgroundColor:"#4234A2" }}
          className="h-6 flex items-center text-xs p-2"
          variant="primary"
        >
          RS 399 per session
        </Button>{" "}
      </div>
    </div>
  );
}

export default Card
