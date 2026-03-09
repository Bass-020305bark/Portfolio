import '../Style/SkillCard.css'

export default function SkillsCard({src , skillName}){
    return(
        <>
            <div className="skill-card">
                <img src={src} alt="skill" className='skill-image' />
                <h4 className='skill-name'>{skillName}</h4>
            </div>
        </>
    );
}
