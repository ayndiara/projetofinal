import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/adv2.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Contato = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    //  envio de formulário
    setTimeout(() => {
      setButtonText("Enviar");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Mensagem enviada com sucesso' });
    }, 2000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Entre em Contato</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Sobrenome" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Endereço de Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Telefone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col xs={12}>
                          <p className={status.success === false ? "danger" : "success success-message"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contato;
