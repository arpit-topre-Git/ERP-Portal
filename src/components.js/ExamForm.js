import React from 'react'
import "./ExamForm.css"
export default function ExamForm(props) 
{
  const submitClick = ()=> {
    console.log("Submit");
  }
  const printForm = ()=> {
    console.log("Print");
  }
  return (
    
    <div className='form mx-5' id="form">
        <h2>{props.heading}</h2>
        
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
          </div>
    
          <select className="form-select mb-3"  aria-label="Default select example" >
            
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
          <input className="form-control" type="number" id="exam-fees" placeholder="Enter Exam Fees" aria-label="default input example"></input>
          <button type="button" className="btn btn-success my-3 " onClick={submitClick} required>Submit Form</button>
          <button type="button" className="btn btn-info mx-4" onClick={printForm}>Print Form</button>
        
    </div>
  )
}
