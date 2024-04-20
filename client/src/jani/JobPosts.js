import { faClose,faAdd, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './JobPosts.css';
import { useState } from "react";
import JobDataTable from "../Datatable/JobDataTable";

export default function JobPosts()
{

    const [jobTitle, setJobTitle] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [skillsRequired, setSkillsRequired] = useState('');
    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [keyResponsibilities, setKeyResponsibilities] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [aboutCompany, setAboutCompany] = useState('');
    const [numberOfOpenings, setNumberOfOpenings] = useState('');
    const [popup,setPopup]=useState('none');
    const data=[
{
    jobtitle:'Full Stack',
    postedby:'jani',
    location:'benguluru',
    timestamp:'jan 24'
}

    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
 
      setJobTitle('');
      setJobCategory('');
      setSkillsRequired('');
      setExperience('');
      setLocation('');
      setJobType('');
      setKeyResponsibilities('');
      setQualifications('');
      setAboutCompany('');
      setNumberOfOpenings('');
    };
  const handlePopup=(e)=>{

       if(popup!==''){
        setPopup('');
       }
       else{
        setPopup('none');
       }

  }
      
return(
<>
<div className="content-body">
    <div className="container-fluid">
        <div className="row">
            <div className="card-body" >
                    <button className="btn" style={{fontSize:'20px'}} onClick={(e)=>{handlePopup()}} ><FontAwesomeIcon  icon={faAdd}/>Add A New Job Post</button>
            </div>
        </div>

    <div className="popup-container" style={{display:popup}}>
          <div className="popup">
           <FontAwesomeIcon onClick={(e)=>{handlePopup()}} className="close-btn" style={{fontSize:'20px'}} icon={faClose}/>
           <h2>Enter Job Details</h2>
<form>
<div style={{overFlow:'scroll'}}>
        <h2>Post a New Job</h2>
        <form onSubmit={handleSubmit} className="container">
          <label>
            Job Title:</label>
            <input type="text" value={jobTitle} className="form-control" onChange={(e) => setJobTitle(e.target.value)} />
          <br/>
          <label>
            Job Category:
            <input type="text" value={jobCategory} className="form-control" onChange={(e) => setJobCategory(e.target.value)} />
          </label><br/>
          <label>
            Skills Required:
            <input type="text" value={skillsRequired} className="form-control" onChange={(e) => setSkillsRequired(e.target.value)} />
          </label><br/>
          <label>
            Experience:
            <input type="text" className="form-control" value={experience} onChange={(e) => setExperience(e.target.value)} />
          </label><br/>
          <label>
            Location:</label>
            <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
          <br/>
          <label>
            Job Type:
            <input type="text" className="form-control" value={jobType} onChange={(e) => setJobType(e.target.value)} />
          </label><br/>
          <label>
            Key Responsibilities:
            <textarea value={keyResponsibilities} className="form-control" onChange={(e) => setKeyResponsibilities(e.target.value)} />
          </label><br/>
          <label>
            Qualifications:
            <textarea value={qualifications} className="form-control" onChange={(e) => setQualifications(e.target.value)} />
          </label><br/>
          <label>
            About Company:
            <textarea value={aboutCompany} className="form-control" onChange={(e) => setAboutCompany(e.target.value)} />
          </label><br/>
          <label>
            Number of Openings:
            <input type="number" className="form-control" value={numberOfOpenings} onChange={(e) => setNumberOfOpenings(e.target.value)} />
          </label><br/>
          <button type="submit" className="btn btn-success">Post Job</button>
        </form>
      </div>

</form>
       </div>
    </div>

    <h1>Recent Job Posts</h1>
<JobDataTable data={data} />
    </div>
</div>

</>

);

}