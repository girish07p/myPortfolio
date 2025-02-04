import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/mazeSolver.png";
import projImg2 from "../assets/img/ball-shooting.png";
import projImg3 from "../assets/img/coin-exchange.png";
import projImg4 from "../assets/img/ecomGrocerry.png";
import projImg5 from "../assets/img/oneDayCart.png";
import projImg6 from "../assets/img/printingQueue.png";
import projImg7 from "../assets/img/restraApp.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "1DayCart (E-Commerce Startup)",
      description: "Backend Intern",
      imgUrl: projImg5,
      
    },
    {
      title: "Restra-App Startup",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "General Store e-commerce",
      description: "Developed & Deployed",
      imgUrl: projImg4,
    },
    {
      title: "Dynamic Coin-exchange",
      description: "Design & Development",
      imgUrl: projImg3,
      link:"https://www.youtube.com/watch?v=adZkE-TD_T8"
    },
    {
      title: "Ball-Shooting Game",
      description: "Design & Development",
      imgUrl: projImg2,
      link:"https://girish07p.github.io/Ball-Shooting-Game/"
    },
    {
      title: "Maze Solver | Visual BFS ",
      description: "Design and Development in C++",
      imgUrl: projImg1,
    },
    {
      title: "Printing Queue",
      description: "Design and Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I’ve worked on, turning ideas into real-world solutions:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
