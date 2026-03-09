import '../Style/About.css';
import { PiToolboxFill } from 'react-icons/pi';
import { IoIosMail } from 'react-icons/io';
import profileImage from '../assets/profile.png';

export default function About() {
  return (
    <section className="about-parent" id="about">
      <div className="about">
        <div className="about-descriptions">
                        <h2>Hi, I'm <span className='name'>Baskar</span></h2>
                        <div className="profession">
                            <div className="blink-dot"></div>
                            <p className="profession-text">
                                <span className="typing-text">Getting Trained In Fullstack Development</span>
                            </p>
                        </div>
                        <p className='intro'>I am passionate to learn new technologies. I am always eager in exploring and improving my skills!</p>
                        <div className="about-buttons">
                            <a href="#projects" className='project-btn' aria-label="View Projects section">
                                <PiToolboxFill size={20} className="btn-icon" />
                                <p>View Projects</p>
                            </a>
                            <a href="#contact" className='mail-btn' aria-label="Contact section">
                                <IoIosMail size={20} className="btn-icon" />
                                <p>Contact Me</p>
                            </a>
                        </div>
                    </div>
        <div className="profile" style={{ backgroundImage: `url(${profileImage})` }}></div>
      </div>
    </section>
  );
}
