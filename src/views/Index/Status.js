import React, { useState, useEffect } from "react";
import "./Status.css";

const Status = () => {
  const [occupied, setOccupied] = useState(false);

  // const occupancyHandler = () => {
  //   setOccupied((prev) => !prev);
  // };

  const [data, setData] = useState(1);
  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/", {
  //     method: "GET",
  //   })
  //     .then((resp) => resp.json())
  //     .then((processedphoto) => {
  //       setData(processedphoto);
  //       console.log(processedphoto)
  //     })
  //     .catch((error) => console.log(error));
  // },[]);
  useEffect(()=>{
    fetch("http://127.0.0.1:5000/", {
          method: "GET",
        })
    .then((response) => {
      response.json();
      console.log(response)
    }).catch((error) => console.log(error));
    },[])
  


  // useEffect(() => {
  //   setOccupied((prev) => !prev);
  // }, [data]);

  return (
    <div className="root">
      <div>
        <div className="row">
          <div className={`seat ${data == 1 ? "occupied" : ""}`} />
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
