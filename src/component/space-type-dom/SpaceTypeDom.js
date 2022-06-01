import React, { useState, useEffect, useRef } from "react";
import HeaderPage from "../header/HeaderPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faAngleDoubleRight,
  faAngleRight,
  faChildReaching,
  // faMobilePhone,
  // faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
// import {URL} from '../api/api'
import Swal from "sweetalert2";

function Next(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        marginRight: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        padding: "18px",
      }}
    >
      <img
        src="/assest/Vector (2).png"
        alt="arrow_left"
        style={{ marginTop: "-28px", marginLeft: "-3px" }}
      />
    </div>
  );
}

function Prev(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        marginLeft: "40px",
        zIndex: "1",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        padding: "18px",
      }}
    >
      <img
        src="/assest/Vector (1).png"
        alt="arrow_left"
        style={{ marginTop: "-28px", marginLeft: "-8px" }}
      />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        marginRight: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        padding: "18px",
      }}
    >
      <img
        src="/assest/Vector (2).png"
        alt="arrow_left"
        style={{ marginTop: "-10px", marginLeft: "-3px" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        marginLeft: "40px",
        zIndex: "1",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        padding: "18px",
      }}
    >
      <img
        src="/assest/Vector (1).png"
        alt="arrow_left"
        style={{ marginTop: "-10px", marginLeft: "-8px" }}
      />
    </div>
  );
}

function SampleNext(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        marginRight: "25px",
        backgroundColor: "black",
        borderRadius: "50%",
        padding: "18px",
      }}
    >
      <img
        src="/assest/Vector (2).png"
        alt="arrow_left"
        style={{ marginTop: "-28px", marginLeft: "-3px" }}
      />
    </div>
  );
}

function SamplePrev(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        marginLeft: "30px",
        zIndex: "1",
        backgroundColor: "black",
        borderRadius: "50%",
        padding: "18px",
      }}
    >
      <img
        src="/assest/Vector (1).png"
        alt="arrow_left"
        style={{ marginTop: "-28px", marginLeft: "-8px" }}
      />
    </div>
  );
}

const SpaceTypeDom = () => {
  const [img, setImg] = useState([]);
  const [plan, setPlan] = useState([]);
  const [sercard, setSerCard] = useState([]);
  const [slider, setSlider] = useState([]);
  const [amenties, setAmenties] = useState([]);
  const [propertyname, setPropertyName] = useState("");
  const [cityid, setCityID] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [about, setAbout] = useState("");
  const [open, setOpenTime] = useState("");
  const [close, setCloseTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setMobileNo] = useState("");
  const [list, setList] = useState([]);
  const [space_type, setSpaceType] = useState("");
  const [persons, setPersons] = useState("");
  const [property_id, setPropertyId] = useState("");
  const [review, setReview] = useState("");
  const EnquireSection = useRef(null);
  const RevireSection = useRef(null);
  let { id } = useParams();

  const user_id = 2;
  const defImg = "/assest/office1.png";
  const image = "/assest/image 1.png";
  const defaultImag = "/assest/silder5.jpg";
  const DefautImg = "/assest/silder1.jpg";

  const gotoEnquireSection = () => {
    window.scrollTo({
      top: EnquireSection.current.offsetTop,
      behavior: "smooth",
    });
  };
  const gotoReviewSection = () => {
    window.scrollTo({
      top: RevireSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const nameHandler = (e) => {
    // const name= e.target.name;
    const value = e.target.value;
    setName(value);
  };
  const emaiHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const mobileHandler = (e) => {
    const value = e.target.value;
    setMobileNo(value);
  };

  const handlerPerson = (e) => {
    setPersons(e);
  };

  useEffect(() => {
    fetch(`https://cozone.divashudh.com/api/get_similar_property/${cityid}`)
      .then((res) => res.json())
      .then((res) => {
        setSlider(res.data);
      });
  }, [cityid]);

  useEffect(() => {
    fetch(`https://cozone.divashudh.com/api/get_property_details/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setPropertyId(res.data.id);
        setPropertyName(res.data.property_name);
        setCityID(res.data.city_id);
        setAddress(res.data.address);
        setArea(res.data.area);
        setAbout(res.data.about);
        setOpenTime(res.data.open_time);
        setCloseTime(res.data.close_time);
        setPlan(res.data.membership_plans);
        setSerCard(res.data.enterprise);
        setAmenties(res.data.amenties);
        setList([...res.data.membership_plans, ...res.data.enterprise]);
      });
  }, [id]);

  useEffect(() => {
    fetch("https://cozone.divashudh.com/api/get_add_spaces")
      .then((res) => res.json())
      .then((res) => {
        const imges = res.data[0].image;
        const arr = imges.split(",");
        setImg(arr);
      });
  }, []);

  const reviewHandler = async () => {
    if (review && user_id && property_id) {
      await fetch("https://cozone.divashudh.com/api/save_review", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          review: review,
          user_id: user_id,
          property_id: property_id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Add review in successfully",
          });
          window.location.reload(true);
        });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "warning",
        title: "Fill All Data !!",
      });
    }
  };

  const enquire = async () => {
    await fetch("https://cozone.divashudh.com/api/save_enquiry", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        mobile_no: mobile_no,
        space_type: space_type,
        persons: persons,
        property_id: property_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: `${data.message}`,
          });
          setMobileNo("");
          setEmail("");
          setName("");
          setSpaceType("");
          setPersons("");
        } else {
          const error = data.message[0];
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "warning",
            title: `${error}`,
          });
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  var setting = {
    defaultArrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    nextArrow: <SampleNext />,
    prevArrow: <SamplePrev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings = {
    defaultArrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var PosterSetting = {
    defaultArrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section>
        <HeaderPage />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <Slider {...PosterSetting}>
                {img.map((e) => {
                  return (
                    <div key={e.id}>
                      <Link to={"#"} className="pe-auto">
                        <img
                          src={e ? e : defaultImag}
                          alt=""
                          className="img-fluid w-100 d-block img-hover"
                          style={{ height: "85vh" }}
                        />
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row d-flex flex-row">
            <div className="col-12 col-md-6 col-lg-8 col-sm-6 col-xl-8">
              <div className="column">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-12 d-flex flex-row">
                  <div>
                    <img
                      src="/assest/Ellipse 40.png"
                      alt=""
                      className="ellipse-circle-div"
                    />
                  </div>
                  <div
                    className="col-lg-12 col-12 d-flex flex-row justify-content-evenly"
                    style={{ marginLeft: "-25px" }}
                  >
                    <div className="col-lg-8 col-md-8 col-xl-10 col-sm-8 col-8">
                      <h1>{propertyname}</h1>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xl-2  col-sm-4 col-4 align-self-lg-center">
                      <button
                        type="button"
                        class="Review-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        ref={RevireSection}
                      >
                        Write a review
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Write a Review !!
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <input
                                type="text"
                                placeholder="Enter a Review"
                                className="active"
                                style={{
                                  border: "none",
                                  padding: "1rem",
                                  width: "100%",
                                }}
                                onChange={(e) => setReview(e.target.value)}
                              />
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary"
                                onClick={reviewHandler}
                              >
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-12 col-lg-12">
                  <p className="fs-5 ms-2" style={{ color: "gray" }}>
                    <FontAwesomeIcon icon={faLocationDot} color="gray" />{" "}
                    {address}, {area}
                  </p>
                </div>

                <div className="col-md-12 mt-5 col-12">
                  <h3 className="fw-bold">About this Space</h3>
                </div>
                <div className="col-md-6 col-6 col-lg-3">
                  <img
                    src="/assest/Vector 5.png"
                    className="float-end"
                    alt=""
                  />
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 mt-5">
                  <p className="mb-5" style={{ color: "gray" }}>
                    {about}
                  </p>
                </div>
                <div className="row d-flex flex-row mt-5 mb-5">
                  <div className="col-10 col-md-6 col-lg-6 col-sm-12">
                    <p style={{ color: "gray" }}>
                      Mon - Fri : {open} to {close} PM
                    </p>
                    <p style={{ color: "gray" }}>
                      Sat : {open} AM to {close}
                    </p>
                    <p style={{ color: "gray" }}>PM Sun : Closed</p>
                  </div>
                  <div className="col-2 col-md-4 col-lg-4 d-flex justify-content-center align-self-center">
                    <img
                      src="/assest/Polygon 4.png"
                      alt=""
                      className=""
                      style={{ height: "40px" }}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-8 memebership mt-5">
                  <p className="fw-bold fs-2">Membership Plans</p>
                </div>
                <div className="col-7 col-md-9 col-lg-4">
                  <img
                    src="/assest/Vector 5.png"
                    className="float-end"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-sm-6 d-flex mt-3">
              <div className="column">
                <div className="row d-flex flex-wrap ms-lg-2">
                  {img.slice(0,4).map((e) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-5 col-sm-12 col-xl-6 mb-sm-2 mb-3">
                        <img
                          src={e ? e : DefautImg}
                          alt=""
                          className="img-hover"
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10%",
                          }}
                        />
                      </div>
                    );
                  })}
                
                </div>

                <div
                  className="col-11 col-md-11 col-lg-9 col-sm-12 col-xl-11 ms-3 mt-sm-3  shadow mt-md-5 ms-md-3 ms-0 mt-5 ms-lg-4"
                  style={{
                    borderTopColor: "blue",
                    borderTopStyle: "solid",
                    borderRadius: "10px",
                    borderBlockColor: "blue",
                    borderBlockStyle: "solid",
                    position: "sticky",
                    top: "0px",
                  }}
                  ref={EnquireSection}
                >
                  <div className="row">
                    <div className="">
                      <h2 className="ms-4 mt-4">Enquire Now</h2>
                      <hr />
                    </div>
                    <div className="">
                      <input
                        placeholder="Full Name"
                        className="border-0 ms-4 w-75"
                        name="name"
                        type="text"
                        value={name}
                        onChange={nameHandler}
                      />
                      <hr />
                    </div>
                    <div className="">
                      <input
                        placeholder="Email Id"
                        className="border-0 ms-4 w-75"
                        name="email"
                        type="email"
                        value={email}
                        onChange={emaiHandler}
                      />
                      <hr />
                    </div>
                    <div className="">
                      <input
                        placeholder="Mobile Number"
                        className="border-0 ms-4 w-75"
                        name="mobile"
                        type="number"
                        maxLength={12}
                        value={mobile_no}
                        onChange={mobileHandler}
                      />
                      <hr />
                    </div>
                    <div className="row d-flex flex-row">
                      <div className="col-md-6 col-lg-6 col-6">
                        <div class="dropdown">
                          <button
                            class="btn btn-white dropdown-toggle ms-lg-3 w-100"
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ color: "gray" }}
                          >
                            {space_type ? space_type : "Type"}
                          </button>
                          <ul
                            class="dropdown-menu dropdown-menu-dark"
                            aria-labelledby="dropdownMenuButton2"
                            style={{ maxHeight: "150px", overflowY: "scroll" }}
                          >
                            {list.map((e) => {
                              return (
                                <li
                                  onClick={() => {
                                    setSpaceType(e.plan_name);
                                  }}
                                  key={e.id}
                                >
                                  <Link class="dropdown-item" to={"#"}>
                                    {e.plan_name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                          {/* <hr className="ms-lg-3 ms-md-3" /> */}
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-sm-12 col-6">
                        <div class="dropdown">
                          <button
                            class="btn btn-white dropdown-toggle ms-sm-3 w-100 ms-5"
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ color: "gray" }}
                          >
                            {persons ? persons : "Person"}
                          </button>
                          <ul
                            class="dropdown-menu dropdown-menu-dark"
                            aria-labelledby="dropdownMenuButton2"
                          >
                            <li onClick={() => handlerPerson(10)}>
                              <Link class="dropdown-item" to={"#"}>
                                1-10
                              </Link>
                            </li>
                            <li onClick={() => handlerPerson(20)}>
                              <Link class="dropdown-item" to={"#"}>
                                10-20
                              </Link>
                            </li>
                            <li onClick={() => handlerPerson(30)}>
                              <Link class="dropdown-item" to={"#"}>
                                20-30
                              </Link>
                            </li>
                            <li onClick={() => handlerPerson(40)}>
                              <Link class="dropdown-item" to={"#"}>
                                30-40
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/* <hr /> */}
                      </div>
                    </div>

                    <Link to={"#"} className="text-decoration-none">
                      <div
                        className="col-lg-12 col-12 btn-submit"
                        onClick={enquire}
                      >
                        <h4 className="text-center align-middle text-white">
                          Submit
                        </h4>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row">
            {plan.map((e) => {
              return (
                <div
                  className="col-md-11 col-lg-11 col-11 col-xl-11 ms-3 ms-md-2 mb-4 card-shadws"
                  key={e.id}
                >
                  <div className="row d-flex flex-row">
                    <div className="col-md-1 col-3 col-xl-1 align-self-center">
                      <img
                        src={e.icon ? e.icon : image}
                        alt=""
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div className="col-md-8 col-lg-8 col-xl-7 d-flex flex-column align-self-center">
                      <div>
                        <h5>{e.plan_name}</h5>
                      </div>
                      <div style={{ color: "gray" }}>{e.description}</div>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 d-flex flex-wrap align-items-center justify-content-xl-start align-content-xl-around flex-column ">
                      <div>
                        <p>{e.start}</p>
                      </div>
                      <div className="d-flex flex-row">
                        <h5>{e.price}</h5>/<spsan>{e.plan_duration}</spsan>
                      </div>
                      <div
                        className="col-lg-4 col-xl-4"
                        style={{ cursor: "pointer" }}
                      >
                        <p
                          className="text-center rounded rounded-3 bg-warning"
                          onClick={gotoEnquireSection}
                        >
                          Enquire
                          <FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            color="white"
                            className=" fa-xs"
                          />{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-12 col-lg-5 col-sm-12 col-xl-5 mt-4 p-3 ms-lg-2  d-flex flex-row xl-size">
              <div className="">
                <img src="/assest/Ellipse 40.png" alt="" />
              </div>
              <div className="mt-2">
                <h2 className="" style={{ marginLeft: "-20px" }}>
                  Enterprise Services
                </h2>
              </div>
              <div className="col-1 col-md-1">
                <img
                  src="/assest/Vector 5.png"
                  className="float-end mt-5"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {sercard.map((e) => {
              return (
                <div
                  className="col-md-11 col-lg-11 col-sm-12 col-11 col-xl-11 ms-3 ms-md-2 card-shadws mt-5"
                  key={e.id}
                >
                  <div className="row d-flex flex-row mt-3">
                    <div className="col-md-8 col-lg-8 col-sm-9 col-12 col-xl-8 align-self-center ms-4">
                      <div className="">
                        <h2>{e.plan_name}</h2>
                      </div>
                      <div>
                        <p style={{ color: "gray" }}>{e.description}</p>
                      </div>
                    </div>
                    <div
                      className="col-md-3 align-self-center col-sm-3 col-12 col-xl-2 col-lg-3"
                      style={{ cursor: "pointer" }}
                    >
                      <p
                        className="text-center w-50 bg-warning rounded-3  float-end me-xl-2"
                        onClick={gotoEnquireSection}
                      >
                        Enquire
                        <FontAwesomeIcon
                          icon={faAngleDoubleRight}
                          color="white"
                          className=" fa-xs"
                        />{" "}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5 ms-5">
              <div className="col-12 col-md-6 ms-md-5">
                <h2 className="amenities">Amenities</h2>
              </div>
              <div className="col-4 col-md-6 col-xl-4">
                <img src="/assest/Vector 5.png" className="float-end" alt="" />
              </div>
            </div>
            <div className="col-md-3"></div>
            {/* <div className="col-md-4 col-0 col-lg-0">
              <img
                src="/assest/Ellipse 43.png"
                className="float-end"
                alt=""
                style={{ marginTop: "-80px", zIndex: "1" }}
              />
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="row mt-4 d-flex flex-row justify-content-between card-shadws col-10 ms-4 col-xl-11 ms-xl-0 col-lg-11 ms-lg-0">
            {amenties.map((e) => {
              return (
                <div
                  className="col-md-3 col-xl-3 col-6 d-flex flex-row mb-3 mt-5 ms-1"
                  key={e.id}
                >
                  <div className="">
                    <img src={defImg} alt="" />
                  </div>
                  <div className="">
                    <p className="ms-5">{e.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-7 col-lg-5  col-xl-6 p-5 col-12 ">
              <div className="d-flex flex-row ellipse-div">
                <div className="">
                  <img src="/assest/Ellipse 40.png" alt="" />
                </div>
                <div className="col-6">
                  <h4 style={{ marginLeft: "-20px", marginTop: "10px" }}>
                    You'll work here
                  </h4>
                </div>
                <div className="">
                  <img
                    src="/assest/Vector 5.png"
                    className="mt-5 float-end"
                    alt=""
                  />
                </div>
              </div>
              <h5 className="mt-4 place" style={{ color: "gray" }}>
                Connaught Place, Inner Circle, New Delhi
              </h5>
            </div>
            <div className="col-2 col-md-3 col-xl-4 col-lg-5 p-5"></div>
            <div className="col-5 col-md-2 col-lg-2 col-xl-2 p-5">
              <img
                src="/assest/Polygon 3.png"
                className="w-100 img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                src="/assest/Rectangle 46.png"
                className="img-fluid w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-sm-3 col-12">
              <div>
                <h3>Similar Properties</h3>
              </div>
              <div className="col-8 col-md-7 col-lg-6">
                <img
                  src="/assest/Vector 5.png"
                  className="float-end img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-evenly">
            <Slider {...setting}>
              {slider && slider.length > 0 ? (
                slider.map((e) => {
                  return (
                    <div
                      className="col-8 col-md-4 col-lg-4 col-sm-10 col-xl-12 card-width mt-4 rounded-2 shadow"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #d7d7d9",
                      }}
                      key={e.city_id}
                    >
                      <Slider
                        {...settings}
                        className="col-xl-12"
                        style={{ width: "100%" }}
                      >
                        {img.map((item) => {
                          return (
                            <div className="">
                              <Link
                                to={
                                  "/coworking/coworkingDom/" +
                                  e.id +
                                  "/" +
                                  e.name
                                }
                              >
                                <img
                                  src={item ? item : defaultImag}
                                  alt=""
                                  className="img-fluid rounded-top img-card"
                                />
                              </Link>
                            </div>
                          );
                        })}
                      </Slider>
                      <Link
                        to={"/coworking/coworkingDom/" + e.id + "/" + e.name}
                        className="pe-auto text-decoration-none text-dark"
                        onClick={gotoReviewSection}
                      >
                        <div className="col-12 col-md-6 col-xl-12 col-lg-12 col-sm-12 mt-3 ms-3">
                          <h5 className="adress-card">{e.name}</h5>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 col-sm-12 mt-3 ms-3">
                          <p style={{ color: "gray" }}>
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              color="gray"
                            />{" "}
                            {e.address}, {e.area}, {e.city_name}
                          </p>
                          <p style={{ color: "gray" }}>
                            <FontAwesomeIcon
                              icon={faChildReaching}
                              color="gray"
                            />{" "}
                            Seating Capacity : {e.seat_capacity}
                          </p>
                          <hr style={{ width: "40%" }} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-12 col-sm-6 ms-3">
                          <p style={{ color: "gray" }}>Starting from</p>
                        </div>
                        <div
                          className="row d-flex flex-row justify-content-between"
                          style={{ marginTop: "-20px" }}
                        >
                          <div className="col-5 col-md-6 col-sm-6 ms-3 col-xl-5">
                            <h5 className="mt-1">
                              {e.starting_price}
                              <spna style={{ color: "gray", fontSize: "15px" }}>
                                /month
                              </spna>
                            </h5>
                          </div>
                          <div className="col-5 col-md-5 col-xl-5">
                            <p className="text-end mt-2">
                              Explore Now{" "}
                              <FontAwesomeIcon
                                icon={faAngleRight}
                                color="gray"
                                className=" fa-xs"
                              />
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div
                  className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-12  mt-5"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.322)" }}
                >
                  <h3 className="text-center" style={{ color: "gray" }}>
                    Data Not Found !!
                  </h3>
                </div>
              )}
              {/* })} */}
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default SpaceTypeDom;
