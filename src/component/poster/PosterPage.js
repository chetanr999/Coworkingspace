import React from "react";
import "./Poster.style.css";
import { Link } from "react-router-dom";
import CardPage from "../search-card/CardPage";

function PosterPage() {
 

  return (
    <>
      <section>
        <div className="container-fluid img-cover">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex flex-column">
              <div className="container mt-5 ms-5">
                <div className="row">
                  <div className="col-lg-12 col-md-12 text-container">
                    <p className="lh-1 fw-bold text-white ms-5 text-size col-md-12">
                      Choose from{" "}
                      <span className="fw-bold text-black text-size-50">
                        25,000+
                      </span>
                    </p>
                    <p className="lh-1 fw-bold text-white ms-5 text-size">
                      Spaces on Rent
                    </p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-12 col-md-12 p-1 d-flex dropdown-wapper">
                    <div className="dropdown ms-3">
                      <Link
                        className="btn dropdown-toggle border-white border-2 dropdowns"
                        to="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Looking for
                      </Link>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown ms-3">
                      <Link
                        className="btn dropdown-toggle border-2 border-light ms-4 dropdowns"
                        to="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Select City
                      </Link>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 states-container d-flex flex-wrap mt-5">
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img1 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Lucknow</p>
                    </div>
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img2 d-flex img-fluid"></div>
                      <p className="mt-4 ms-4 names">Delhi</p>
                    </div>
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img3 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Gurugram</p>
                    </div>
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img4 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Noida</p>
                    </div>
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img5 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Bangalore</p>
                    </div>
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img6 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Hyderabad</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 states-container d-flex flex-wrap mt-4">
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img7 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Lucknow</p>
                    </div>
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img8 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Lucknow</p>
                    </div>
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img9 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Lucknow</p>
                    </div>
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img10 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Lucknow</p>
                    </div>
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img11 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Lucknow</p>
                    </div>
                    <div className="col-lg-2 col-md-2 states">
                      <div className="img12 d-flex img-fluid"></div>
                      <p className="mt-4 ms-3 names">Lucknow</p>
                    </div>
                  </div>
                </div>
                <div className="img-dotted"></div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5 col-md-5 view-change">
              <div className="row">
                <div className="col-8 col-md-8 d-flex flex-row" style={{position:'relative'}}>
                  <img src="https://i.postimg.cc/wxk9sc2D/Ellipse-2.png"  alt="" className="circle-img"/>
                  <img src="https://i.postimg.cc/7hBvt9tc/Ellipse-1-2.png"  alt="" className="shape-img"/>
                </div>
                <div className="col-lg-2 col-md-2">
                  <img src="https://i.postimg.cc/9QmbQVMG/Group-8.png"  alt="" className="dot-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardPage />
      </section>
    </>
  );
}

export default PosterPage;
