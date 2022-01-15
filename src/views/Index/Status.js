import React,{ useState }  from "react";
import "./Status.css";

const Status = () => {

  const [occupied, setOccupied] = useState(true);


  return (
    <div className="root">
      <div>
        <div className="row">
          <div className={`seat ${occupied ? "occupied" : ""}`} />
          <div className="seat" />
        </div>
        <div className="row">
          <div className="table" />
          <div className="table" />
        </div>
        <div className="row">
          <div className="seat" />
          <div className="seat" />
        </div>
      </div>
    </div>
  );
};

export default Status;
