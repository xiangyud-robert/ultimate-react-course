import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar/>
      <div className="data">
        <Intro/>
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillListV2/>
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="jonas.jpeg" className="avatar" alt="Jonas Schmedtmann"/>;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue"/>
      <Skill skill="HTML+CSS" emoji="💪" color="orange"/>
      <Skill skill="JavaScript" emoji="💪" color="yellow"/>
      <Skill skill="Svelte" emoji="👶" color="orangered"/>
    </div>
  );
}

function SkillListV2() {
  return (
    <div className="skill-list">
      {skills.map(skill => (
        <SkillV2 skill={skill.skill} level={skill.level} color={skill.color} key={skill.skill}/>
      ))}
    </div>
  );
}

function SkillV2({skill, level, color}) {

  return (
    <div className="skill" style={{backgroundColor: color}}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
