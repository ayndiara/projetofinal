import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Conteúdo do Footer */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* Conteúdo dos ícones sociais */}
            </div>
            <p>Copyright 2023. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;

