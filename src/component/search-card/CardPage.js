import React, { useState, useEffect } from "react";
import "./Card.style.css";
import { Link } from "react-router-dom";

const CardPage = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("https://cozone.divashudh.com/api/get_space_type")
      .then((res) => res.json())
      .then((res) => {
        setCardData(res.data);
      });
  }, []);

  const defaultImages = "/assest/gallery 1.png";

  return (
    <>
      {" "}
      <section>
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-4 col-sm-4 col-2">
              <img
                src="/assest/Ellipse 16.png"
                alt=""
                className="img-fluid full-circle-img"
              />
            </div>
            <div className="col-lg-4 col-md-5 col-sm-4 col-9">
              <div className="d-flex flex-row justify-content-center">
                <img src="/assest/Ellipse.png" alt="" className="circle" />
                <h1 className="fw-bold fs-3 z-position">
                  Search by Space types
                </h1>
              </div>
              <div>
                <img
                  src="/assest/Vector.png"
                  alt=""
                  className="img-fluid small"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
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
                  <div className="col-xl-12 col-12 card" key={e.id}>
                    <Link
                      to={e.id + "/" + e.name}
                      className="text-decoration-none text-black-50 d-flex justify-content-center"
                    >
                      <img
                        src={e.image ? e.image : defaultImages}
                        className="img-fluid mobile-card-logo"
                        alt="logo"
                      />
                      <p className="location-name text-center">{e.name}</p>
                    </Link>
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
