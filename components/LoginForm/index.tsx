import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import BlueBackground from '../shared/BlueBackground';

interface LoginProps {
  titlePhrase: String;
  buttonPhrase: String;
}

const LoginForm: React.FC<LoginProps> = ({titlePhrase, buttonPhrase}) => {


  return (
    <div>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
          <BlueBackground>

            <h4>{ titlePhrase }</h4>

            <InputGroup className="mt-3">
              <FormControl placeholder="E-mail" />
            </InputGroup>

            <InputGroup className="mt-3">
              <FormControl placeholder="Senha" />
            </InputGroup>

            <Button className="btn btn-info mt-3 w-100">{ buttonPhrase }</Button>
            <br />
            Esqueci a senha
          </BlueBackground>
        </Col>
      </Row>
    </div>
  )
}

export default LoginForm;