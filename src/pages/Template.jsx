// import React, { Fragment, PureComponent } from 'react';
// import { withRouter } from 'react-router';
// import { connect } from 'react-redux';

// class Sample extends PureComponent {
//     constructor(props){
//         super(props);
//         this.state ={}
//     }

//     componentDidMount = () => {
//         console.log("Sample Rendered")
//     }

//     render(){
//         return(
//             <Fragment>

//             </Fragment>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         store: state
//     }
// }

// const mapDispatchToProps = {
//   }
  


// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sample));

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

function Experience() {
  //component state
  const [experiences, setExperiences] = useState([{
    JobTitle: "",
    Employer: "",
    StartDate: "",
    EndDate: "",
  }]);
  //   const [clicked, setClicked] = useState(false);

  //handle onChange
  const handleExperience = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setExperiences({ ...experiences, [name]: value });
  };
  
  const handleClick = () => {
      let lastExperiences = experiences;
      var newExperience = {
        JobTitle: "",
        Employer: "",
        StartDate: "",
        EndDate: "",
      }

      lastExperiences.push(newExperience);
      setExperiences([...lastExperiences])
  }

  //It will render when the Experience state gets updated
//   useEffect(() => {
//     setWorkExperience({ ...WorkExperience, [id]: experiences });
//   }, [experiences]);

  //It will render the experience component
  return (
  	experiences.map(experience => 
    <div>
      <input
        name="JobTitle"
        value={experience.JobTitle}
        placeholder="Job Title"
        required
        onChange={handleExperience}
      />
      <input
        name="Employer"
        value={experience.Employer}
        placeholder="Employer"
        required
        onChange={handleExperience}
      />
      <input
        name="StartDate"
        value={experience.StartDate}
        placeholder="Start Date"
        required
        onChange={handleExperience}
      />
      <input
        name="EndDate"
        value={experience.EndDate}
        placeholder="End Date"
        required
        onChange={handleExperience}
      />
      <button type="button" onClick={handleClick}>
        +
      </button>
      {/* {clicked ? <Experience /> : ""} */}
    </div>)
  );
}

export default withRouter(Experience);
