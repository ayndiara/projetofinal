import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/vaga1.png";
import projImg2 from "../assets/img/vaga2.png";
import projImg3 from "../assets/img/vaga3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Vagas = () => {
  const projects = [
    {
      title: "Advogada Senior",
      description: "Empresa",
      imgUrl: projImg1,
      link: "https://www.linkedin.com/jobs/search/?currentJobId=3670698590&keywords=advogada",
    },
    {
      title: "Advogada Junior/Pleno",
      description: "Empresa",
      imgUrl: projImg2,
      link: "https://www.linkedin.com/jobs/search/?currentJobId=3658402444&keywords=advogada",
    },
    {
      title: "Advogada Contencioso",
      description: "Escritório",
      imgUrl: projImg3,
      link: "https://www.linkedin.com/jobs/search/?currentJobId=3670916360&keywords=advogada",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Vagas</h2>
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <Col key={index} xs={6} sm={4} md={4}>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ProjectCard {...project} />
                          </a>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

