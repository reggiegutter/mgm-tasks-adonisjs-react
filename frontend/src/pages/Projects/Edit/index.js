import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TitlePage from 'components/TitlePage';
import Form from './form';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loading from 'components/Loading';

const Edit = ({currentPath}) => {
  let { id } = useParams();
  
  const FETCH_PROJECT = gql`
  {
    fetchProject(id: ${id}) {
      name
      description
      start
      end
      cost
      status
      customer{
        id
      }
    }
  }
`;
 const { loading, error, data } = useQuery(FETCH_PROJECT);
 
 if (loading) return <Loading />;
 
 return (
    <Container>
      <Row>
        <Col lg={12}><TitlePage title={`Atualizar projeto - ${data.fetchCustomer?.name.toUpperCase()}`} /></Col>
      </Row>
      <Form currentPath={currentPath} id={id} initialValues={data} />
    </Container>  
  );
}

export default Edit;