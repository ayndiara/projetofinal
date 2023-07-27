import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/adv.jpg";

import 'animate.css';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Boas-vindas</span>
              <h1>{`Olá! eu sou a Jusdi`}, Impulsionadora de Carreiras de Advogadas Negras</h1>
              <p>Atualmente, existe uma preocupante desigualdade na contratação e atuação de advogados negros e periféricos. Cerca de 11% são contratados por grandes escritórios de advocacia. A falta de diversidade na advocacia compromete o sistema de justiça, afetando a qualidade e a equidade dos serviços jurídicos prestados.</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="rounded-image">
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
