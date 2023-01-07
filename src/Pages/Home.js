import React, { useState,useEffect } from "react";
import "../Pages/Home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Home = () => {

    const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/employeeDetails");
    setData(response.data);

  };
  useEffect(() => {
    loadData();
  }, []);







  const navigate = useNavigate();
  const getLogin = JSON.parse(localStorage.getItem("user"));
  const userName = [];
  userName.push(getLogin);

  const logincheckuser = userName.map((e) => e.name);

  //logout function
  const logout = () => {
    localStorage.removeItem("loggedin");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="homebg">
      <div className="header">
        <Link to={"/home"}>Home</Link>

        <div onClick={logout} className="logout">
          Logout
        </div>
      </div>
      <h1 className="text-center">Welcome {logincheckuser} </h1>
      <div id="datatable">
      <div>
<h3 id="tabletitle">Login User Details</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact No</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {userName.map((item, index) => {
            return (
              <tr key={item}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contactno}</td>

                <td>
                  <Link to={"/view"}>
                    <button className="btn btn-view" id="viewbtn">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>

      <div >
      <h3 id="tabletitle">Employee Detail</h3>


      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact No</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contactno}</td>

                <td>
                  <Link to={`/viewemployee/${item.id}`}>
                    <button className="btn btn-view" id="viewbtn">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
};

export default Home;
