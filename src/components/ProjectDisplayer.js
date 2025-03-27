import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { detailedProjects } from '../data/projectsData.js';

export const ProjectDisplayer = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const projectRef = useRef(null); // Reference for scrolling

  // Scroll to the project container when the component mounts
  useEffect(() => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Find the project with matching ID
  const project = detailedProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <Container ref={projectRef} className="project-not-found fade-in">
        <h2>Project Not Found</h2>
        <Button 
          variant="primary" 
          onClick={() => {
            navigate('/'); // Navigate back to projects page
            setTimeout(() => {
              const projectsSection = document.getElementById('projects-section');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 200); // Delay for smooth navigation
          }}
          className="back-button"
        >
          ← Back to Projects
        </Button>
      </Container>
    );
  }

  return (
    <Container ref={projectRef} className="project-displayer-container fade-in">
      {/* Back Button */}
      <Button 
        variant="primary" 
        onClick={() => {
          navigate('/'); // Navigate back
          setTimeout(() => {
            const projectsSection = document.getElementById('projects-section');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 200); // Ensures navigation completes first
        }}
        className="back-button"
      >
        ← Back to Projects
      </Button>

      {/* Project Header */}
      <div className="project-header slide-up">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.shortDescription}</p>
      </div>

      {/* Introduction Section */}
      <div className="project-intro slide-up">
        <p>{project.longDescription}</p>
      </div>

      {/* Main Image */}
      <div className="main-image-container fade-in">
        <img 
          src={project.imgUrl} 
          alt={project.title} 
          className="main-project-image"
          loading="lazy"
        />
      </div>

      {/* Additional Images Grid */}
      {project.additionalImages?.length > 0 && (
        <div className="additional-images-section fade-in">
          <h3>Screenshots</h3>
          <Row className="g-4">
            {project.additionalImages.map((img, index) => (
              <Col md={6} lg={4} key={index}>
                <div className="additional-image-container">
                  <img 
                    src={img} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="additional-image"
                    loading="lazy"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Technical Details */}
      <div className="technical-details slide-up">
        <h3>Key Features</h3>
        <ul>
          {project.details.map((detail, index) => (
            <li key={index}>
              <span className="detail-icon">▹</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* External Link */}
      {project.link && (
        <div className="project-link fade-in">
          <Button 
            variant="outline-primary" 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="live-demo-btn"
          >
            View Live Demo
          </Button>
        </div>
      )}
    </Container>
  );
};