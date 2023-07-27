import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/img/color-sharp.png';

export const Sobre = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Sobre</h2>
              <p>
                O objetivo é fomentar e apoiar a contratação de advogadas negras e periféricas por empresas e escritórios de advocacia. Nesse sentido, serão exibidas vagas para proporcionar oportunidades para essas profissionais.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Sobre;
