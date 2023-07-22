import React, { useEffect, useState } from "react";
import "./AllUser.css";
import axios from "axios";
import { AddUser } from "./AddUser";

export const AllUser = () => {
  const [user, setUser] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4500/GET/users");

      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  ;

  const handleDelete = (id) => {
    fetch(`http://localhost:4500/users/delete/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getUser();
    console.log(user);
  }, []);

  return (
    <>
      <div className="tableBox">
        <div className="addUsers">
          <h1>All Users</h1>
          <button className="addBtn" onClick={openModal}>
            Add User +
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          {user.map((el) => (
            <tbody key={el.id}>
              <tr>
                <td>{el.firstname + " " + el.lastname}</td>
                <td>{el.age}</td>
                <td>{el.city}</td>
                <td>{el.role}</td>
                <td>
                  <button className="btndelete" onClick={()=>handleDelete(el.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {isOpen && (
        <div className="modal">

          <AddUser closeModal={closeModal}/>
        </div>
      )}
    </>
  );
};

