import  { useRef, useEffect } from 'react';
import './page3.css'; 
import js from '../assets/logos/java-script.png'

function PageThird() {
  const firstSectionRef = useRef(null);

  useEffect(() => {
    // Add event listener to window scroll
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Get the scroll position
    const scrollTop = window.scrollY;
    const firstSection = firstSectionRef.current;

    // Calculate the opacity and scale based on scroll position
    const opacity = Math.max(1 - scrollTop / window.innerHeight, 0);
    const scale = 1 + scrollTop / window.innerHeight;

    // Apply the styles to the first section
    if (firstSection) {
      firstSection.style.opacity = opacity;
      firstSection.style.transform = `scale(${scale})`;
    }
  };

  return (
    <div>
      {/* First section */}
      <div ref={firstSectionRef} className="first-section">
      <div className="logos-container">
      <div className="logos">
        <img src={js} alt="JavaScript Logo" />
        <img src="html-logo.png" alt="HTML Logo" />
        <img src="css-logo.png" alt="CSS Logo" />
        <img src="bootstrap-logo.png" alt="Bootstrap Logo" />
        <img src="nodejs-logo.png" alt="Node.js Logo" />
        <img src="sql-logo.png" alt="SQL Logo" />
        <img src="mysql-logo.png" alt="MySQL Logo" />
        <img src="postgresql-logo.png" alt="PostgreSQL Logo" />
        {/* Add more logos as needed */}
      </div>
    </div>
      </div>

      {/* Second section */}
      <div className="second-section">
        <h1>Second Section</h1>
        <p>This is the content of the second section.</p>
      </div>
    </div>
  );
}

export default PageThird;
