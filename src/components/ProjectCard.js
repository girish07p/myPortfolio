import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ id, title, description, imgUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div 
        onClick={handleClick}
        style={{ 
          textDecoration: "none", 
          color: "inherit",
          cursor: "pointer" 
        }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};