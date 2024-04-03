import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useFetchStore } from "../lib/fetchContext";
import { usePostStore } from "../lib/postContext";

import Breadcrumb from "../common/Breadcrumb";

const Contact = () => {
  const { getData } = useFetchStore();
  const { postData } = usePostStore();
  const location = useLocation();
  const pathName = location.pathname;

  const [specialistData, setSpecialistData] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSpecialist = async () => {
      const data = await getData("/specialists");
      setSpecialistData(data);
    };

    getSpecialist();
  }, [getData]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateDate = (date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) return false;

    const userPickedDate = new Date(date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Reset hours to compare just dates

    return userPickedDate >= currentDate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(false);
    setAppointmentBooked(false);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validateDate(date)) {
      setError("Please enter a valid date.");
      return;
    }

    const appointmentData = {
      fullName,
      email,
      specialist,
      date,
      time,
    };

    console.log("Sending:", appointmentData);

    try {
      const response = await postData("/book-appointment", appointmentData);
      console.log("Response:", response);

      if (response.ok) {
        console.log("Appointment booked successfully.");
        setAppointmentBooked(true);
      } else {
        console.error("Failed to book an appointment.");
        setError("Fields can't be empty!");
      }
    } catch (error) {
      console.error("Error during booking:", error);
    }
  };

  return (
    <main id="contact-us">
      <section id="hero">
        <div className="info">
          <div className="header">
            <Breadcrumb pathName={pathName} />
            <h1>Contact Us</h1>
          </div>
          <div className="card">
            <div className="icon-wrapper">
              <img
                src="./icons/EnvelopePrimary.svg"
                alt="Primary envelope icon"
                className="icon"
              />
            </div>
            <div className="content">
              <h4>Email Us</h4>
              <p>
                Please feel free to drop us a line. We will respond as soon as
                possible
              </p>
              <Link>
                Leave a message{" "}
                <img src="./icons/ArrowBlue.svg" alt="Blue arrow icon" />
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="icon-wrapper">
              <img src="./icons/AddGroup.svg" alt="Add group icon" />
            </div>
            <div className="content">
              <h4>Careers</h4>
              <p>
                Sit ac ipsum leo lorem magna nunc mattis maecenas non
                vestibulum.
              </p>
              <Link>
                Send an application{" "}
                <img src="./icons/ArrowBlue.svg" alt="Blue arrow icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="consult-form">
          <h2>Get Online Consultation</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="specialist">Specialist</label>
              <select
                id="specialist"
                value={specialist}
                onChange={(e) => setSpecialist(e.target.value)}
              >
                <option value=""></option>
                {specialistData.map((specialist) => (
                  <option key={specialist.id} value={specialist.id}>
                    {specialist.firstName} {specialist.lastName}
                  </option>
                ))}
              </select>
            </div>
            <div className="date-time">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  className="date-time-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  className="date-time-input"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div className="btn-container">
              <button type="submit" className="btn-theme submit-btn">
                Make an appointment
              </button>
              {appointmentBooked ? (
                <div className=" submit-btn btn appointmentBooked">
                  <p>Appointment Booked</p>
                </div>
              ) : null}
              {error ? (
                <div className="submit-btn btn error">
                  <p>{error}</p>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </section>
      <section id="map"></section>
    </main>
  );
};

export default Contact;
