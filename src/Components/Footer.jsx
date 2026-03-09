import { MdEmail } from 'react-icons/md';
import { FaOrcid } from 'react-icons/fa';
import '../Style/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-parent" id="contact">
      <div className="footer-shell">
        <div className="footer-header">
          <div className="footer-brand">
            <p className="footer-label">Contact</p>
            <h3>Baskar K</h3>
          </div>
          <a className="footer-button" href="mailto:baskar.ka@zohocorp.com">
            Get In Touch
          </a>
        </div>

        <div className="footer-meta">
          <div className="footer-card">
            <MdEmail size={18} />
            <div>
              <small>Email</small>
              <p>baskar.ka@zohocorp.com</p>
            </div>
          </div>
          <div className="footer-card">
            <FaOrcid size={18} />
            <div>
              <small>Employee ID</small>
              <p>zsttk-406</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-year">© {year} Baskar K</p>
          <div className="footer-links">
            <a href="#about">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
