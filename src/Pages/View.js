import React from "react";
import '../Pages/View.css'
import {Link} from "react-router-dom"


const View=()=>{
    const userName=JSON.parse(localStorage.getItem("user"));

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

            <strong>Name:</strong>
            <span>{userName.name}</span>
            <br/>
            <br/>
            <strong>Email:</strong>
            <span>{userName.email}</span>
            <br/>
            <br/>
            <strong>Contact:</strong>
            <span>{userName.contactno}</span>
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

export default View;