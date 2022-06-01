import React, { useEffect, useState } from "react";
import "./Poster.style.css";
import { Link, useNavigate } from "react-router-dom";
import CardPage from "../search-card/CardPage";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import Modal from '../city-modal/Modal';

// const MySwal = withReactContent(Swal);

function PosterPage() {
  const [city, setCity] = useState([]);
  const [lookingfor, setLookingFor] = useState([]);
  const [lookingforapiid, setLookingForApiId] = useState("");
  const [loookingselect, setLookingSelect] = useState("");
  const [cities, setCities] = useState("");
  const [citydata, setCityData] = useState("");
  const [staticcity, setStaticCity] = useState([]);
  const [openModal, setOpenModal]=useState(false);
  const [clickid, setClickId]=useState('');
  const [clickname, setClickName]=useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://cozone.divashudh.com/api/get_cities`)
      .then((res) => res.json())
      .then((res) => {
        setStaticCity(res.data);
      });
  }, []);

  const lookinghandler = (e) => {
    setCities(e.name);
    setLookingForApiId(e.id);
    fetch(`https://cozone.divashudh.com/api/get_cities`)
      .then((res) => res.json())
      .then((res) => {
        setCity(res.data);
        setLookingSelect(res.data);
        // setCities(res.data)
        setStaticCity(res.data);
      });
  };

  const cityhandler = (e) => {
    setCityData(e.location);
    fetch(
      `https://cozone.divashudh.com/api/get_cities_properties_spaces/${e.id}/${lookingforapiid}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.data[0].space_for === 1) {
          navigate("/coworking/city/" + e.id + "/" + e.location);
        } else {
          navigate("/coliving/city/" + e.id + "/" + e.location);
        }
      });
  };


  useEffect(() => {
    fetch("https://cozone.divashudh.com/api/get_space_for")
      .then((res) => res.json())
      .then((res) => {
        setLookingFor(res.data);
      });
  }, []);

  const defaultImg = "https://i.postimg.cc/qBNCdGpt/gallery-1.png";

  return (
    <>
      <section>
        <div className="container-fluid img-cover">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex flex-column">
              <div className="container mt-5">
                <div className="row ms-xl-5 ms-lg-3 ms-md-3">
                  <div className="col-lg-12 col-md-12 text-container">
                    <p className="lh-1 fw-bold text-white ms-5x ms-lg-0 text-size">
                      Choose from{" "}
                      <span
                        className="fw-bold text-size-50"
                        style={{ color: "black" }}
                      >
                        25,000+
                      </span>
                    </p>
                    <p className="lh-1 fw-bold text-white text-size">
                      Spaces on Rent
                    </p>
                  </div>
                </div>
                <div className="row mt-2 ms-lg-3 ms-md-3 ms-xl-5">
                  <div className="col-lg-12 col-md-12 p-1 d-flex">
                    <div className="dropdown">
                      <Link
                        className="btn dropdown-toggle border-white border-2 dropdowns"
                        to="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {cities ? cities : "Looking For"}
                        {/* Looking For */}
                      </Link>

                      <ul
                        className="dropdown-menu mt-2"
                        aria-labelledby="dropdownMenuLink"
                        style={{ width: "100%" }}
                      >
                        {lookingfor.map((e) => {
                          return (
                            <>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to={"#"}
                                  key={e.id}
                                  onClick={() => lookinghandler(e)}
                                >
                                  {e.name}
                                </Link>
                              </li>
                            </>
                          );
                        })}
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
                        {citydata ? citydata : "Select City"}
                        {/* Select City */}
                      </Link>
                      <ul
                        className="dropdown-menu menu-scroll mt-2"
                        aria-labelledby="dropdownMenuLink"
                        style={{ width: "90%" }}
                      >
                        {city.length > 0 ? city.map((e) => {
                          return (
                            <li>
                              <Link
                                className="dropdown-item d-flex flex-row"
                                to={"#"}
                                key={e.id}
                                state={{
                                  id: e.id,
                                  name: e.location,
                                }}
                                onClick={() => cityhandler(e)}
                              >
                                <img
                                  src={e.image ? e.image : defaultImg}
                                  className="img-fluid country-img"
                                  alt="logo"
                                />
                                <p className="ms-2">{e.location}</p>
                              </Link>
                            </li>
                          );
                        }):
                        (
                          <p className="text-center mb-0 text-black-50">Select Looking for</p>
                        )
                      }
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row d-flex flex-row justify-content-between">
                  <div className="col-x-12 col-lg-12 col-md-12 col-12 mt-5 card-mobile-view">
                    {
                     (staticcity.length > 0
                        ? staticcity.slice(0, 12)
                        : city
                      ).map((e) => {
                        return (
                          <div
                            className="col-lg-2 col-md-2 col-xl-1 mb-lg-3 mb-md-3 text-center card-circel-img openModalBtn shadow"
                            onClick={()=>{
                              setOpenModal(true);
                              setClickId(e.id);
                              setClickName(e.location);
                            }}
                          >
                            <Link
                              to={"#"}
                              key={e.id}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <div className="images-div">
                                <img
                                  src={e.image}
                                  alt=""
                                  className="img-size images-div"
                                />
                                <p>{e.location}</p>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    }
                  </div>
                {openModal && <Modal closeModal={setOpenModal} id={clickid} name={clickname} />}
                </div>
                <div className="img-dotted"></div>
              </div>
            </div>

            <div className="col-5 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-8 col-md-12 col-lg-12 view-change">
                  <img
                    src="/assest/circle.png"
                    alt=""
                    className="img-fluid circle-image"
                  />
                  <img
                    src="/assest/Ellipse-1-2.png"
                    alt=""
                    className="img-fluid ellipse-image"
                  />
                </div>
                <div className="col-lg-2 col-md-2">
                  <img src="/assest/Group 8.png" alt="" className="dot-img" />
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
