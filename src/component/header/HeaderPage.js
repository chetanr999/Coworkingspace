import React from "react";
import "./Header.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom'
// import PosterPage from "../poster/PosterPage";


function HeaderPage() {
  return (
    <>
      <div className="container-fluid bg-white wrapper">
        <div className="row col-12">
          <div className="col-lg-2 img-container">
            <img
              src="https://i.postimg.cc/0r1MmzSF/Group.png"
              style={{
                width: "45px",
                height: "60px",
                marginLeft: "2rem",
                marginTop: "18px",
              }}
              alt="logo"
            />
          </div>
          <div className="container-fluid col-lg-10 bg-white">
            <div className="row first-col">
              <div className="col-lg-12  d-flex justify-content-end">
                <div className="col-lg-5 d-flex justify-content-end">
                  <div className="icons">
                    <FontAwesomeIcon icon={faFacebook} color="#FFC727" />
                  </div>
                  <div className="icons">
                    <FontAwesomeIcon icon={faEnvelope} color="#FFC727" />
                  </div>
                  <div className="icons">
                    <FontAwesomeIcon icon={faLinkedin} color="#FFC727" />
                  </div>
                  <div className="icons">
                    <FontAwesomeIcon icon={faYoutube} color="#FFC727" />
                  </div>
                  <div className="icons">
                    <FontAwesomeIcon icon={faWhatsapp} color="#FFC727" />
                  </div>
                  <div className="icons">
                    <FontAwesomeIcon icon={faInstagram} color="#FFC727" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex flex-row display-dropdown">
            <div className="dropdown">
              <Link
                className="btn dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Coworking
              </Link>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
            <div className="dropdown">
              <Link
                className="btn dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Coliving
              </Link>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
            <div className="dropdown">
              <Link
                className="btn dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Offices 
              </Link>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
            <div className="dropdown">
              <Link
                className="btn dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Knowledge 
              </Link>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
            <p className="mt-2">+91 9999 999999</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderPage;
