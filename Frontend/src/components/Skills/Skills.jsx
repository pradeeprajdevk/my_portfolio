import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkillsData } from "../../redux/portfolioSlice";
import { Loader } from "../Loader/Loader";
import "./Skills.css";

export const Skills = () => {
  const dispatch = useDispatch();
  const { skills, status, error } = useSelector((state) => state.portfolio);

  useEffect(() => {
    dispatch(fetchSkillsData());
  }, [dispatch]);

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      { skills &&  status === "loading" && <Loader />}

      { !skills && status === "failed" && <p>{error}</p>}

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill._id} className="skill-box">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
