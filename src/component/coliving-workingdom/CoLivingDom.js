import React, { useState, useEffect, useRef } from "react";
import HeaderPage from "../header/HeaderPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faAngleDoubleRight,
  faChildReaching,
  faAngleRight,
  // faMobilePhone,
  // faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import Swal from 'sweetalert2'
// import { data } from "jquery";
import './Coliving.style.css'

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


const CoLivingDom = () => {
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
  const [name , setName]=useState('');
  const [email, setEmail]=useState('');
  const [mobile_no, setMobileNo] = useState("");
  const [list, setList]=useState([]);
  // const [planname,setPlaneName]=useState([]);
  // const [person, setPerson]=useState([]);
  const [space_type, setSpaceType] = useState("");
  const [persons, setPersons] = useState("");
  const [property_id, setPropertyId]=useState('');
  const [review, setReview]=useState('');
  // const location=useLocation();
  const EnquireSection = useRef(null);
  const RevireSection =useRef(null);
  let { id } = useParams();


  const gotoEnquireSection = () =>{
    window.scrollTo({
      top:EnquireSection.current.offsetTop,
      behavior:'smooth'
    })
  }
  const gotoReviewSection = () => {
    window.scrollTo({
      top: RevireSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handlerPerson =(e) =>{
    setPersons(e);
  }

  const user_id =2;

  useEffect(() => {
    fetch(`https://cozone.divashudh.com/api/get_similar_property/${cityid}`)
      .then((res) => res.json())
      .then((res) => {
        setSlider(res.data);
      });
  },[cityid]);


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
        setList([...res.data.membership_plans,...res.data.enterprise]);
      });
  }, [id]);
  
  const defImg = "/assest/office1.png";
  const image = "/assest/image 1.png";

  useEffect(() => {
    fetch("https://cozone.divashudh.com/api/get_add_spaces")
      .then((res) => res.json())
      .then((res) => {
        const imges = res.data[0].image;
        const arr = imges.split(",");
        setImg(arr);
      });
  }, []);

  const defaultImag = "/assest/silder5.jpg";


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



  const reviewHandler = async () =>{
    if(review && user_id  && property_id){
      await fetch("https://cozone.divashudh.com/api/save_review", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          review: review,
          user_id: user_id, 
          property_id:property_id
        }),
      })
        .then((res) => res.json())
        .then((data) => {
  
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Add review in successfully'
          })
          setReview('');    
        });
    }else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'warning',
        title: 'Fill All Data !!'
      })
    }  
  };
  

  const enquire = async () => {
    if (name !="" && email !="" && mobile_no !="" && space_type !="" && persons !="" && property_id !="")  {
      await fetch("https://cozone.divashudh.com/api/save_enquiry", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          mobile_no: mobile_no,
          space_type: space_type,
          persons: persons,
          property_id:property_id
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === 200) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Enquiry Submitted successfully'
          })
          setName("");
          setEmail("");
          setMobileNo("");
          setPersons("");
          setPropertyId("");
      } });
    }else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'warning',
        title: 'Fill All Data !!'
      })
    }
  };





  return (
    <>
      <section>
        <HeaderPage />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <Slider {...settings}>
                {img.map((e) => {
                  return (
                    <div>
                      <Link to={"#"} className="pe-auto">
                        <img
                          src={
                            e ? e : defaultImag
                          }
                          alt=""
                          className="img-fluid w-100 d-block"
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
                    <img src="/assest/Ellipse 40.png" alt="" />
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
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        ref={RevireSection}
                      >
                        Review
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
                            <input type='text' placeholder="Enter a Review" className="active" style={{border:'none', padding:'1rem', width:'100%'}} onChange={(e)=>setReview(e.target.value)}/>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary" onClick={reviewHandler}>
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
                  <p className="fs-5 ms-2">
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
                  <p>{about}</p>
                </div>
                <div className="row d-flex flex-row mt-5">
                  <div className="col-10 col-md-6 col-lg-6 col-sm-12">
                    <p>
                      Mon - Fri : {open} to {close} PM
                    </p>
                    <p>
                      Sat : {open} AM to {close}
                    </p>
                    <p>PM Sun : Closed</p>
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
                <div className="col-12 col-md-12 col-lg-8 mt-2">
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
                  <div className="col-12 col-md-6 col-lg-5 col-sm-12 col-xl-6 mb-sm-2 mb-3">
                    <img
                      src="/assest/silder1.jpg"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10%",
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-5 col-xl-6 col-sm-12">
                    <img
                      src="/assest/silder1.jpg"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10%",
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-5 col-xl-6 col-sm-12 mt-3">
                    <img
                      src="/assest/silder1.jpg"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10%",
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-5 col-xl-6 col-sm-12 mt-3">
                    <img
                      src="/assest/silder1.jpg"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10%",
                      }}
                    />
                  </div>
                </div>

                <div
                  className="col-11 col-md-11 col-lg-9 col-sm-12 col-xl-11 ms-3 mt-sm-3  shadow mt-md-5 ms-md-3 ms-0 mt-5 ms-lg-4"
                  style={{
                    borderTopColor: "blue",
                    borderTopStyle: "solid",
                    borderRadius: "10px",
                    borderBlockColor: "blue",
                    borderBlockStyle: "solid",
                    position:'sticky',
                    top:'0px'
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
                        name="firstName"
                        onChange={(event) => {setName(event.target.value)}}
                      />
                      <hr />
                    </div>
                    <div className="">
                      <input
                        placeholder="Email Id"
                        className="border-0 ms-4 w-75"
                        name="email"
                        onChange={(event) => {setEmail(event.target.value)}}
                      />
                      <hr />
                    </div>
                    <div className="">
                      <input
                        placeholder="Mobile Number"
                        className="border-0 ms-4 w-75"
                        name="mobile"
                        onChange={(event) => {setMobileNo(event.target.value)}}
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
                                <li onClick={() => {setSpaceType(e.plan_name)}} key={e.id}>
                                  <Link class="dropdown-item" to={"#"}>
                                    {e.plan_name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                          <hr className="ms-lg-3 ms-md-3" />
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
                        <hr />
                      </div>
                    </div>

                    <div className="col-lg-6 col-6 ms-3" style={{cursor:'pointer'}}>
                      <Link to={"#"}>                      
                      <p
                        className="text-white fs-5 text-center col-lg-12 col-md-12 col-sm-12 col-12 bg-primary rounded w- ms-lg-4 ms-md-4 ms-sm-5"
                        onClick={enquire}
                      >
                        Submit
                      </p>
                      </Link>
                    </div>
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
                  className="col-md-11 col-lg-11 col-11 ms-3 ms-md-2 mb-4 shadow border-3 rounded-3"
                  key={e.id}
                >
                  <div className="row d-flex flex-row">
                    <div className="col-md-1 col-3 align-self-center">
                      <img
                        src={e.icon ? e.icon : image}
                        alt=""
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div className="col-md-8 col-lg-8 d-flex flex-column align-self-center">
                      <div>
                        <h2>{e.plan_name}</h2>
                      </div>
                      <div>{e.description}</div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                      <div className="">
                        <p>{e.start}</p>
                      </div>
                      <div className="">
                        <h5>{e.plan_duration}</h5>
                      </div>
                      <div className="col-lg-4 rounded rounded-3 bg-warning" style={{cursor:'pointer'}}>
                        <p className="text-center" onClick={gotoEnquireSection}>
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
        <div className="container-fluid">
          <div className="row ms-5">
            <div className="col-12 col-md-12 col-lg-5 col-sm-12 mt-4 p-3 ms-lg-5 d-flex flex-row">
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
                <div className="col-md-11 col-lg-11 col-sm-12 col-11 col-xl-11 ms-3 ms-md-2 shadow mt-5 rounded-3" key={e.id}>
                  <div className="row d-flex flex-row mt-3">
                    <div className="col-md-9 col-lg-8 col-sm-9 col-12 col-xl-8 align-self-center ms-4">
                      <div className="">
                        <h2>{e.plan_name}</h2>
                      </div>
                      <div>
                        <p>{e.description}</p>
                      </div>
                    </div>
                    <div className="col-md-2 align-self-center col-sm-3 col-12 col-xl-2 col-lg-2" style={{cursor:'pointer'}}>
                      <p className="text-center w-50 bg-warning rounded-3  float-end me-xl-2" onClick={gotoEnquireSection}>
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
           <div className="col-md-5">
              <div className="col-md-6 ms-md-5">
                <h2>Amenities</h2>
              </div>
              <div className="col-4 col-md-6">
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
          <div
            className="row mt-4 d-flex flex-row justify-content-between shadow col-10 ms-4 col-xl-11 ms-xl-0 col-lg-11 ms-lg-0"
          >
            {amenties.map((e) => {
              return (
                <div className="col-md-3 col-xl-3 col-6 d-flex flex-row mb-3 mt-5 ms-1" key={e.id}>
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
            <div className="col-md-7 col-lg-5 p-5 col-12">
              <div className="d-flex flex-row">
                <div className="">
                  <img src="/assest/Ellipse 40.png" alt="" />
                </div>
                <div className="col-6">
                  <h4 style={{ marginLeft: "-20px", marginTop: "10px" }}>
                    You'll work here
                  </h4>
                </div>
                <div className="col-12">
                  <img src="/assest/Vector 5.png" className="mt-5" alt="" />
                </div>
              </div>
              <h5 className="mt-4">Connaught Place, Inner Circle, New Delhi</h5>
            </div>
            <div className="col-2 col-md-3 col-lg-5 p-5"></div>
            <div className="col-5 col-md-2 col-lg-2 p-5">
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
            <div className="col-lg-6 col-md-6 col-sm-3 col-12">
              <div>
                <h3>Similar Properties</h3>
              </div>
              <div className="col-6 col-md-7 col-lg-4">
                <img src="/assest/Vector 5.png" className="float-end img-fluid" alt=""/>
              </div>
            </div>
          </div>
          {/* <div className="row mt-5">
            <div className="col-lg-12">
              <Slider {...setting}>
                {slider.map((e) => {
                  return (
                    <div>
                      <img
                        src="/assest/Rectangle 18.png"
                        alt=""
                        className="img-fluid slider-img"
                      />
                      <h3 className="text-center text-black">{e.location}</h3>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div> */}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-evenly">
            <Slider {...setting}>
            {slider && slider.length >0 ? slider.map((e) => {
              return (
                <div
                  className="col-8 col-md-4 col-lg-4 col-sm-10 col-xl-12 card-width mt-4 rounded-2 shadow"
                  style={{ backgroundColor: "white", border:'1px solid #d7d7d9'}}
                  key={e.city_id}
                >
                  <Slider {...settings} className="col-xl-12" style={{width:'100%'}}>
                    {img.map((item) => {
                      return (
                        <div className="">
                          <Link
                             to={"/coliving/colivingDom/"+e.id+"/"+e.name}
                            >
                            <img
                              src={item? item: defaultImag}
                              alt=""
                              className="img-fluid rounded-top img-card"
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </Slider>
                    <Link
                   to={"/coliving/colivingDom/"+e.id+"/"+e.name}
                    className="pe-auto text-decoration-none text-dark"
                  onClick={gotoReviewSection}

                   >
                    <div className="col-12 col-md-6 col-xl-12 col-lg-12 col-sm-12 mt-3 ms-3">
                      <h5 className="adress-card">{e.name}</h5>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 mt-3 ms-3">
                      <p style={{color:"gray"}}>
                        <FontAwesomeIcon icon={faLocationDot} color="gray" />{" "}
                        {e.address}, {e.area}, {e.city_name}
                      </p>
                      <p style={{color:"gray"}}>
                        <FontAwesomeIcon icon={faChildReaching} color="gray" />{" "}
                        Seating Capacity : {e.seat_capacity}
                      </p>
                      <hr style={{ width: "40%" }} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-12 col-sm-6 ms-3">
                      <p style={{color:"gray"}}>Starting from</p>
                    </div>
                    <div className="row d-flex flex-row justify-content-between" style={{marginTop:'-20px'}}>
                      <div className="col-5 col-md-6 col-sm-6 ms-3 col-xl-5">
                        <h5 className="mt-1">{e.starting_price}<spna style={{color:"gray",fontSize:'15px'}}>/month</spna></h5>
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
              }):(
                <div
                className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-12  mt-5"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.322)" }}
              >
                <h3 className="text-center" style={{color:'gray'}}>Data Not Found !!</h3>
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

export default CoLivingDom;
