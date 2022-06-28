import React, { useState } from 'react';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([
    { name: "Change brake lights", isDone: false },
    { name: "Fill transmission fluid", isDone: false },
    { name: "Get wheel arch covers", isDone: false }
  ]);
  const [newJob, setNewJob] = useState("");

  const jobNodes = jobs.map((job, index) => {
    return (
      <li class = "jobList"  key={index} >
        <span>{job.name}</span>
        <span class ="jobs">
        {job.isDone ? <span>Done</span> : <button onClick={() => markAsDone(index)}>Done</button>}
        </span>
      </li>
    )
  });

  const handleJobInput = (event) => {
    setNewJob(event.target.value)
    // whats this^^^^^^^^^^^^
  }
  const addNewJob = (event) => {
    event.preventDefault();
    const copyJobs = [...jobs];
    copyJobs.push({ name: newJob, isDone: false })
    setJobs(copyJobs)
    setNewJob("")
  }

  const markAsDone = (index) => {
    const copyJobs = [...jobs];
    copyJobs[index].isDone = true;
    setJobs(copyJobs)
  }



  //App return
  return (
    <>
      <h1>Truck Problems</h1>

      <ul>
        {jobNodes}
      </ul>
      <form onSubmit={addNewJob}>
        <label htmlFor="new-Job"> What else needs fixed? </label>
        <input type="text" value={newJob} onChange={handleJobInput} />
        <input type="submit" value="Save Problem" />
      </form>
    </>
  );
}

export default App;
