import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import '../Style/Header.css';

export default function Header({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('about');

  const closeMenu = () => setMenuOpen(false);
  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    closeMenu();
  };

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'contact'];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 120;
      let currentSection = 'about';

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveNav(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection);
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <header className="header-parent">
      <div className="header">
        <div className="heading">
          <h2 className="heading-des">Portfolio</h2>
        </div>

        <div className="header-actions">
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={menuOpen ? 'nav-open' : ''}>
            <ul>
              <li>
                <a
                  href="#about"
                  className={`link ${activeNav === 'about' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('about')}
                  aria-current={activeNav === 'about' ? 'page' : undefined}
                >
                  Home
                </a>
                <div className="underline">
                  <div className="inner-underline"></div>
                </div>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`link ${activeNav === 'skills' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('skills')}
                  aria-current={activeNav === 'skills' ? 'page' : undefined}
                >
                  Skills
                </a>
                <div className="underline">
                  <div className="inner-underline"></div>
                </div>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`link ${activeNav === 'projects' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('projects')}
                  aria-current={activeNav === 'projects' ? 'page' : undefined}
                >
                  Projects
                </a>
                <div className="underline" id="project">
                  <div className="inner-underline"></div>
                </div>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`link ${activeNav === 'contact' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('contact')}
                  aria-current={activeNav === 'contact' ? 'page' : undefined}
                >
                  Contact
                </a>
                <div className="underline">
                  <div className="inner-underline"></div>
                </div>
              </li>
            </ul>
          </nav>

          <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle color theme" type="button">
            {isDark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
