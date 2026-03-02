import { useState } from "react";

function MatchForm() {
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [level, setLevel] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    // Later connect to FastAPI
    const Results = [
      { id: 1, title: "Software Developer Intern", company: "TechCorp" },
      { id: 2, title: "Backend Intern", company: "Innovate Ltd" }
    ];
    setResults(Results);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Find Internships</h2>

      <select onChange={(e) => setEducation(e.target.value)}>
        <option>Select Education Level</option>
        <option>Diploma</option>
        <option>Bachelor</option>
        <option>Masters</option>
      </select>

      <input 
        placeholder="Skills (e.g React, Python)"
        onChange={(e) => setSkills(e.target.value)}
      />

      <select onChange={(e) => setLevel(e.target.value)}>
        <option>Select Expertise</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <button onClick={handleSubmit}>Match</button>

      <div style={{ marginTop: "20px" }}>
        {results.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchForm;