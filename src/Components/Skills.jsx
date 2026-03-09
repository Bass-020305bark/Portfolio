import SkillsCard from './SkillsCard';
import '../Style/Skills.css';

export default function Skills() {
  return (
     <section className="skills-parent" id="skills">
                <h1 className="skill-heading">Skills</h1>
                <h1 className="skills-des">Technologies I Work With</h1>
                <div className="skills-list">
                    <SkillsCard src = {"./src/assets/html.png"} skillName = {"HTML"} ></SkillsCard>
                    <SkillsCard src = {"./src/assets/css-3.png"} skillName = {"CSS"} ></SkillsCard>
                    <SkillsCard src = {"./src/assets/js.png"} skillName = {"JS"} ></SkillsCard>
                    <SkillsCard src = {"./src/assets/node-js.png"} skillName = {"Node JS"} ></SkillsCard>
                    <SkillsCard src = {"./src/assets/java.png"} skillName = {"JAVA"} ></SkillsCard>
                    <SkillsCard src = {"./src/assets/physics.png"} skillName = {"REACT"} ></SkillsCard>
                    <SkillsCard src = {"./src/assets/programing.png"} skillName = {"MYSQL"} ></SkillsCard>
                </div>
            </section>
  );
}
