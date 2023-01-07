import React,{useState,useEffect} from "react";
import '../Pages/View.css'
import {Link,useParams} from "react-router-dom"
import axios from 'axios'

const Emp=()=>{
    const [userr,setUser]=useState({});
    const {id}=useParams();

    useEffect(()=>{

        axios.get(`http://localhost:8000/employeeDetails/${id}`)
        .then((resp)=>{
console.log(resp);
            setUser({...resp.data})});
    },[id]);

console.log(userr);
return(
    <div>
    <div className="viewheader">


    <div id="viewtitle">View Page</div>

    </div>
    <div style={{marginTop:"150px"}}>

    <div className="cardd">
        <div className="cardd-header">
            <p>User Detail</p>
        </div>
        <div className="containerr">
        <strong>ID:</strong>
                        <span>{id}</span>
                        <br/>
                        <br/>
            <strong>Name:</strong>
            <span>{userr.name}</span>
            <br/>
            <br/>
            <strong>Email:</strong>
            <span>{userr.email}</span>
            <br/>
            <br/>
            <strong>Contact:</strong>
            <span>{userr.contactno}</span>
            <br/>
            <br/>
<Link to={"/home"}>
<button className="btn btn-edit" id="btnedit">Go back</button>
</Link>
        </div>
    </div>
</div>
</div>
)
}

export default Emp;