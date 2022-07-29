// import logo from './logo.svg';
import './App.css';
import Navbar from "./components.js/Navbar";
// import ExamForm from "./components.js/ExamForm";
import Student from "./components.js/Student";

function App() {
  return (
    <>
      <Navbar title="ABC Engineering College -- ERP Portal"/>
      <div className='container my-4'>
        {/* <ExamForm heading="Exam Form"/> */}

        <Student heading="Student Information"/>
      </div>
    </>
  );
}

export default App;
