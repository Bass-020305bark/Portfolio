import { useState } from 'react';
import '../Style/Projects.css';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const scratchProject = [
    {
      id: 'scratch-1',
      title: 'Sudoku',
      desc: 'An interactive Sudoku game that challenges players to solve number puzzles using logic and strategy.',
      category: 'Scratch',
      url: 'https://scratch.mit.edu/projects/1191470785',
      imgUrl: './src/assets/scratchProject1.png',
      lang: ['Scratch'],
    },
    {
      id: 'scratch-2',
      title: 'Shooting Game',
      desc: 'A simple shooting game where players aim and shoot targets while testing their speed and accuracy.',
      category: 'Scratch',
      url: 'https://scratch.mit.edu/projects/1191470785',
      imgUrl: './src/assets/scratchProject2.png',
      lang: ['Scratch'],
    },
  ];

  const groupProject = [
    {
      id: 'group-1',
      title: 'Smart Drive',
      desc: 'Smart Drive is a storage optimization system that compresses data using advanced algorithms to store files more efficiently.',
      category: 'GroupProject',
      url: 'https://github.com/Prince-Rajadurai/WorkDriveFrontend.git',
      imgUrl: './src/assets/groupProject.png',
      lang: ['Java', 'React', 'MySQL'],
    },
  ];

  const javaProjects = [
    {
      id: 'java-1',
      title: 'Pay Roll Management',
      desc: 'An application designed to manage employee payroll, including salary processing, deductions, and records.',
      category: 'Java',
      url: 'https://github.com/Bass-020305bark/Java-Project.git',
      imgUrl: './src/assets/javaProject1.jpg',
      lang: ['Java'],
    },
    {
      id: 'java-2',
      title: 'Tree Map',
      desc: 'A map data structure implemented using a Red-Black Tree to ensure balanced storage and efficient search operations.',
      category: 'Java',
      url: 'https://github.com/Bass-020305bark/TreeMap.git',
      imgUrl: './src/assets/javaProject2.png',
      lang: ['Java'],
    },
  ];

  const jsProjects = [
    {
      id: 'js-1',
      title: 'Audit Log',
      desc: 'An audit logging system designed to monitor and store user activities for security and analysis.',
      category: 'JS',
      url: 'https://baskarka-25w6igj3-8443.zcodecorp.in/Project1/jsProject/admin.html',
      imgUrl: './src/assets/jsProject1.png',
      lang: ['Js'],
    },
    {
      id: 'js-2',
      title: 'Rock-Paper-Scissors(Game)',
      desc: 'A real-time Rock-Paper-Scissors game where two players compete instantly using WebSocket communication.',
      category: 'JS',
      url: 'https://github.com/Bass-020305bark/Rock-Paper-Scissors.git',
      imgUrl: './src/assets/jsProject2.png',
      lang: ['Js'],
    },
  ];

  const htmlProjects = [
    {
      id: 'htmlcss-1',
      title: 'Zoho Desk (Re-design)',
      desc: 'This project is created to practice responsive layout, semantic structure, and modern web design fundamentals.',
      category: 'HTML & CSS',
      url: 'https://baskarka-25w6igj3-8443.zcodecorp.in/Project1/Project/home.html',
      imgUrl: './src/assets/htmlProject4.png',
      lang: ['html', 'css'],
    },
    {
      id: 'htmlcss-2',
      title: 'Phantom (Re-design)',
      desc: 'A responsive redesign of the Pixelarity landing page built with semantic HTML and modern CSS.',
      category: 'HTML & CSS',
      url: 'https://baskarka-25w6igj3-8443.zcodecorp.in/Project1/Assignment/Assignment_017_1/page.html',
      imgUrl: './src/assets/htmlProject1.png',
      lang: ['html', 'css'],
    },
    {
      id: 'htmlcss-3',
      title: 'Pixelarity (Re-design)',
      desc: 'A responsive redesign of the Pixelarity landing page built with semantic HTML and modern CSS.',
      category: 'HTML & CSS',
      url: 'https://baskarka-25w6igj3-8443.zcodecorp.in/Project1/Assignment/Assignment_014_1/page.html',
      imgUrl: './src/assets/htmlProject2.png',
      lang: ['html', 'css'],
    },
    {
      id: 'htmlcss-4',
      title: 'Fylo (Re-design)',
      desc: 'A responsive redesign of the Pixelarity landing page built with semantic HTML and modern CSS.',
      category: 'HTML & CSS',
      url: 'https://baskarka-25w6igj3-8443.zcodecorp.in/Project1/Assignment/Assignment_013_1/page.html',
      imgUrl: './src/assets/htmlProject3.png',
      lang: ['html', 'css'],
    },
  ];

  const projects = [...groupProject, ...javaProjects, ...jsProjects, ...htmlProjects, ...scratchProject];

  const filteredProjects = filter === 'All' ? projects : projects.filter((value) => value.category === filter);

  return (
    <section className="projects-parent" id="projects">
      <div className="projects">
        <h1 className="project-heading">Projects</h1>
      </div>
      <div className="projects-btn">
        <button
          className={`pro-btn ${filter === 'All' ? 'active-pro-btn' : ''}`}
          onClick={() => setFilter('All')}
          title="Show all projects"
          aria-label="Show all projects"
        >
          All
        </button>
        <button
          className={`pro-btn ${filter === 'Java' ? 'active-pro-btn' : ''}`}
          onClick={() => setFilter('Java')}
          title="Show Java projects"
          aria-label="Show Java projects"
        >
          Java
        </button>
        <button
          className={`pro-btn ${filter === 'JS' ? 'active-pro-btn' : ''}`}
          onClick={() => setFilter('JS')}
          title="Show JavaScript projects"
          aria-label="Show JavaScript projects"
        >
          Java Script
        </button>
        <button
          className={`pro-btn ${filter === 'HTML & CSS' ? 'active-pro-btn' : ''}`}
          onClick={() => setFilter('HTML & CSS')}
          title="Show HTML and CSS projects"
          aria-label="Show HTML and CSS projects"
        >
          HTML & CSS
        </button>
        <button
          className={`pro-btn ${filter === 'GroupProject' ? 'active-pro-btn' : ''}`}
          onClick={() => setFilter('GroupProject')}
          title="Show group projects"
          aria-label="Show group projects"
        >
          Group Project
        </button>
        <button
          className={`pro-btn ${filter === 'Scratch' ? 'active-pro-btn' : ''}`}
          onClick={() => setFilter('Scratch')}
          title="Show Scratch projects"
          aria-label="Show Scratch projects"
        >
          Scratch
        </button>
      </div>
      <div className="project-container">
        {filteredProjects.map((value, index) => (
          <ProjectCard
            imageUrl={value.imgUrl}
            title={value.title}
            description={value.desc}
            languages={value.lang}
            url={value.url}
            key={value.id}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
