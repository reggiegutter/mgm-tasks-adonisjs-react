import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from 'components/Logo';
import UserInfo from 'components/UserInfo';
import Nav from 'components/Nav';
import { Redirect } from 'react-router-dom';
import { toast } from "react-toastify";

import { isLogin } from 'utils';

const Layout = ({children}) => {
  
  if (!isLogin()){
    toast.error("Você não está logado.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
      closeButton: true,
    });
    return <Redirect to="/login" />
  }

  return (
    <Container className="container-pai">
      <Row>
        <Col className="header">
          <Logo />
          <UserInfo />
        </Col>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Col style={{ padding: 0 }} lg={3}>
          <Nav />
        </Col>
        <Col className="content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
