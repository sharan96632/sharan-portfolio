import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import idea from "../../Assets/Projects/idea.png";
import pottery from "../../Assets/Projects/pottery.png";
import farfetch from "../../Assets/Projects/farfetch.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idea}
              isBlog={false}
              title="IDEAKART"
              description="Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories."
               Link = "https://ideakart-clone.netlify.app/about "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pottery}
              isBlog={false}
              title="POTTERYBARN"
              description="Pottery Barn is an American upscale home furnishing store chain and e-commerce company, with retail stores in the United States, Canada, Mexico and Australia. 
               Link :https://potterybarn-clone.netlify.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farfetch}
              isBlog={false}
              title="FARFETCH"
              description="Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
