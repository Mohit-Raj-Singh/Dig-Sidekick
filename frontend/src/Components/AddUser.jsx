import React, { useState } from "react";
import "./AddUser.css";
import axios from "axios";

export const AddUser = ({ closeModal }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4500/GET/users");
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const payload = {
      firstname: firstname,
      lastname: lastname,
      age: age,
      city: city,
      role: role,
    };

    fetch("http://localhost:4500/POST/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((payload) => {
        console.log(payload);
      })
      .catch((err) => {
        console.log(err);
      });
    setFirstname("");
    setLastname("");
    setAge("");
    setCity("");
    setRole("");
    // getUser();
  };

  return (
    <div className="mainBox">
      <div className="imgBox">
        <img
          className="bannerImg"
          src="https://www.rentomojo.com/public/images/smartAuth/cat-happy.svg"
          alt="banner"
        />
      </div>
      <div className="formBox">
        <img
          src="https://www.rentomojo.com/public/images/smartAuth/close.svg"
          alt="cross"
          className="closeBtn"
          onClick={closeModal}
        />
        <div>
          <h1 className="heading">Add Users</h1>
        </div>
        <div className="inputBox">
          <form onSubmit={handleAddUser}>
            <input
              type="text"
              autocomplete="off"
              className="firstName"
              placeholder="Enter Your First Name*"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              type="text"
              autocomplete="off"
              className="firstName"
              placeholder="Enter Your Last Name*"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <input
              type="number"
              autocomplete="off"
              className="firstName"
              placeholder="Age*"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <input
              type="text"
              autocomplete="off"
              className="firstName"
              placeholder="City*"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <input
              type="text"
              autocomplete="off"
              className="firstName"
              placeholder="Role*"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
            <input
              type="submit"
              value="Continue"
              className="btnSubmit"
              onClick={getUser}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
