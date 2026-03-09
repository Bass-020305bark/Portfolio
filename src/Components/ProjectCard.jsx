import '../Style/ProjectCard.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function ProjectCard({ imageUrl, title, description, languages, url, index }) {
  return (
    <article className="project-card" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="project-images">
        <img src={imageUrl} alt={title} className="project-image" />
      </div>
      <h3 className="pro-heading">{title}</h3>
      <p className="project-des">{description}</p>
      <div className="language">
        {languages.map((value, languageIndex) => (
          <p className="known-language" key={`${title}-${value}-${languageIndex}`}>
            {value}
          </p>
        ))}
      </div>
      <div className="project-link">
        <a href={url} className="pro-link" target="_blank" rel="noreferrer">
          <span>View Project</span>
          <FaLongArrowAltRight size={15} className="arrow" />
        </a>
      </div>
    </article>
  );
}
