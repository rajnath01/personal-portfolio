import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when a link is clicked
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  // Sample projects data with images
  const projects = [
    { 
      title: 'Bespoke E-commerce Experience', 
      description: 'An exquisite online shopping platform with refined aesthetics, intuitive navigation, and personalized client journeys. Crafted with meticulous attention to detail using React, Node.js, and MongoDB.',
      link: 'https://github.com/rajnath01/luxury-ecommerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      title: 'Curated Portfolio Gallery', 
      description: 'A meticulously designed gallery for discerning artists and photographers, featuring elegant transitions, thoughtful spacing, and immersive viewing experiences.',
      link: 'https://github.com/rajnath01/portfolio-gallery',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      title: 'Premium Analytics Dashboard', 
      description: 'A sophisticated financial interface with bespoke data visualizations, tailored reporting tools, and a refined user experience that transforms complex data into elegant insights.',
      link: 'https://github.com/rajnath01/financial-dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      title: 'Exclusive Travel Companion', 
      description: 'An elite travel application offering handcrafted experiences, bespoke itineraries, and unparalleled attention to detail for the discerning traveler seeking extraordinary journeys.',
      link: 'https://github.com/rajnath01/travel-experience',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); // This prevents the default form submission
    // Here you would handle the form data, such as:
    // - Sending it to a backend service
    // - Storing it locally
    // - Displaying a success message
    console.log("Form submitted");
  }

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className={`navbar ${menuOpen ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <div 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleNavLinkClick}>Portfolio</a></li>
          <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        {/* About Me Section */}
        <div id="about" className="section">
          <h2>About Me</h2>
          <div className="about-content">
            {/* Profile Image - Updated with a more reliable image source */}
            <img 
              src="https://avatars.githubusercontent.com/u/88278631?v=4"
              alt="Profile" 
              className="profile-image" 
            />
            
            <p className="bio">
              I am a distinguished designer and developer devoted to crafting exquisite digital experiences that embody sophistication and refinement. 
              With an unwavering commitment to excellence and a discerning eye for detail, I create bespoke solutions where elegance meets functionality.
              My philosophy combines timeless design principles with innovative technology to deliver experiences that are both memorable and impactful.

              From luxury brand identities to premium digital platforms, I bring an uncompromising standard of quality and precision to every endeavor.
            </p>
            
            <a href="#projects" className="cta-button">View Portfolio</a>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="section">
          <h2>Portfolio</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div key={index} className="project-card" style={{"--i": index + 1}}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Explore Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="section">
          <h2>Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <p><strong>Let's collaborate</strong> on creating something truly exceptional. I'm available for select projects that demand the highest standards of excellence and sophistication.</p>
              <p><strong>Email:</strong> rajnathsingh.dev@gmail.com</p>
              <div className="social-links">
                <a href="https://github.com/rajnath01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/rajnathsingh01" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/rajnathsingh01" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message" rows="5"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;