import React, { useState, useEffect } from "react";
// import Data from "../../Card.json";
import "./Card.style.css";

const CardPage = () => {
  // const [fetch, setFetch] = useState([]);
    const [cardData, setCardData]=useState([]);

  useEffect(() => {
    fetch("https://cozone.divashudh.com/api/get_space_type")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setCardData(res.data);
      });
  }, []);

  return (
    <>
      {" "}
      <section>
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src="/assest/Ellipse 16.png"
                alt=""
                className="img-fluid full-circle-img"
              />
            </div>
            <div className="col-lg-4">
              <div className="d-flex flex-row justify-content-center">
                <img
                  src="/assest/Ellipse.png"
                  alt=""
                  className="img-fluid circle"
                />
                <h1 className="fw-bold fs-2 z-position">
                  Search by Space types
                </h1>
              </div>
              <div className="d-flex justify-content-center">
                <img src="/assest/Vector.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
              <img
                src="/assest/Ellipse_halfcircle.png"
                alt=""
                className="img-fluid half-circle-img"
              />
            </div>
          </div>
          <div className="container mt-5">
            <div className="row d-flex flex-wrap justify-content-evenly">
              {cardData.map((e) => {
                return (
                  <div className="col-lg-12 card" key={e.id}>
                    <h5 className="text-center mt-3">{e.name}</h5>
                    <div className="col-lg-12 col-sm-12 d-flex flex-row justify-content-evenly mt-1">
                      <div className="d-flex flex-wrap align-content-center">
                        <h5>{e.location}</h5>
                      </div>
                      <div className="d-flex flex-column align-content-center ms-2">
                        <img src={'https://i.postimg.cc/qBNCdGpt/gallery-1.png'} className="img-fluid mobile-card-logo" alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardPage;
