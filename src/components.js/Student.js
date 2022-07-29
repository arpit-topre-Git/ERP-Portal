import React from 'react'
import "./Student.css"

export default function Student(props) 
{
    const btnUpdate = ()=> {
        console.log("Update");
    }
    const btnView = ()=> {
        console.log("View");
    }
    const btnAdd = ()=> {
        console.log("Add");
    }
    const btnEdit = ()=> {
        console.log("Edit");
    }
    const btnDelete = ()=> {
        console.log("Delete");
    }

    
    return (
    <div className='container'>
    <div className='form mx-5 '>
        <h2>{props.heading}</h2>
        {/* <h3>{props.h}</h3> */}
        <div className="row">
          <div className="col">
            <label> First Name
              <input type="text" className="form-control" placeholder="First name" required/>
            </label>
          </div>
          <div className="col">
            <label> First Name
              <input type="text" className="form-control" placeholder="Middle name" required/>
            </label>
          </div>
          <div className="col ">
            <label > Last Name
              <input type="text" className="form-control" placeholder="Last name" required/>
            </label>
          </div>
        </div>
          <div className=" my-3">
            {/* <label for="exampleFormControlInput1" className="form-label"></label> */}
            <input type="email" className="form-control" id="email-id" placeholder="Enter your email address" required/>
            <div class="form-group my-3">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control " id="inputAddress" placeholder="Enter your Address"/>
            </div>
          </div>
          <label for="birthday ">Date of Birth:</label>
            <input type="date" id="birthday" name="birthday"/>
          <select className="form-select my-3"  aria-label="Default select example" >
            
            <option selected>-----Select Branch-----</option>
            <option value="1">Computer Science and Engineering</option>
            <option value="2">Mechanical Engineering</option>
            <option value="3">Electrical Engineering</option>
            <option value="4">Civil Engineering</option>
            <option value="5">Aeronautical Engineering</option>
          </select>
          <select className="form-select mb-3" aria-label="Default select    example">
            <option selected>-----Select Semester-----</option>
            <option value="01">First Semester</option>
            <option value="02">Second Semester</option>
            <option value="03">Third Semester</option>
            <option value="04">Fourth Semester</option>
            <option value="05">Fifth Semester</option>
            <option value="06">Sixth Semester</option>
            <option value="07">Seventh Semester</option>
            <option value="08">Eighth Semester</option>
          </select>
        
          <button type="button" className="btn btn-success m-3 " onClick={btnUpdate} required>Update</button>
          <button type="button" class="btn btn-primary" onClick={btnView}>View</button>
          <button type="button" class="btn btn-dark mx-3"  onClick={btnAdd}>Add</button>
          <button type="button" class="btn btn-secondary " onClick={btnEdit}>Edit</button>
          <button type="button" class="btn btn-danger mx-3" onClick={btnDelete}>Delete</button>
        
        
    </div>
    </div>
  )
}
