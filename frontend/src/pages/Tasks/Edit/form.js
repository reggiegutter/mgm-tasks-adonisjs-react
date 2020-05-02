import React,{ useState } from 'react';
import { Formik } from 'formik';

import { useHistory } from "react-router-dom";

import ErrorMsg from 'components/ErrorMsg';
import TextInput from 'components/FormFields/TextInput';
import SelectInput from 'components/FormFields/SelectInput';
import DateInput from 'components/FormFields/DateInput';
import TimeInput from 'components/FormFields/TimeInput';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'components/Button'
import BackButtonForm from 'components/BackButtonForm'

import validation from 'validations/projects';
import BaseForm from 'pages/BaseForm';
import { 
  getAvailableTaskPriority, 
  getAvailableTaskStatus, 
  joinDateTimeAndPrepareToDB,
  prepareArrayProjectsToFillInSelect,
  prepapreInitialValuesWithSameKeysOfTable
} from 'utils'

const Form = ({currentPath, projectsFill: projectsFill_, initialValues: initialValues_, id}) => {
  const history = useHistory();

  const data = initialValues_.fetchTask;
  const initialValues = prepapreInitialValuesWithSameKeysOfTable(data,"project")
  const projectsFill = prepareArrayProjectsToFillInSelect(projectsFill_)
  console.log(initialValues);
  return (
    <BaseForm>
      {(store, update, errorApiRequest) => (
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={(values) => { 
              update(currentPath,id,joinDateTimeAndPrepareToDB(values)) 
            }}              
          >
            {({
              values,
              handleChange,
              errors,
              touched,
              setFieldTouched,
              handleSubmit,
            }) => (
              <div className="container-form">
                <Row>
                  <Col lg={4}>
                    <TextInput 
                      label="Nome*" 
                      value={values.name} 
                      handleChange={handleChange('name')}
                      onSetFieldTouched={() => setFieldTouched('name')}
                    />
                    {touched.name && errors.name && (
                      <ErrorMsg description={errors.name} />
                    )}
                  </Col>
                  <Col lg={5}>
                    <TextInput 
                      label="Descrição" 
                      value={values.description} 
                      handleChange={handleChange('description')}
                      onSetFieldTouched={() => setFieldTouched('description')}
                    />
                  </Col>
                  <Col lg={3}>
                    <SelectInput 
                        label="Prioridade*"
                        handleChange={handleChange('priority')}
                        onSetFieldTouched={() => setFieldTouched('priority')}
                        value={values.priority}
                        fill={getAvailableTaskPriority()}
                      />
                      {touched.status && errors.status && (
                        <ErrorMsg description={errors.status} />
                      )}
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <DateInput 
                      label="Data inicial*" 
                      value={values.start_date} 
                      handleChange={handleChange('start_date')}
                      onSetFieldTouched={() => setFieldTouched('start_date')}
                    />
                    {touched.start_date && errors.start_date && (
                      <ErrorMsg description={errors.start_date} />
                    )}
                  </Col>
                  <Col lg={3}>
                    <TimeInput 
                      label="Horário inicial*" 
                      value={values.start_time} 
                      handleChange={handleChange('start_time')}
                      onSetFieldTouched={() => setFieldTouched('start_time')}
                    />
                    {touched.start_time && errors.start_time && (
                      <ErrorMsg description={errors.start_time} />
                    )}
                  </Col>
                  <Col lg={3}>
                    <DateInput 
                      label="Data final*" 
                      value={values.end_date} 
                      handleChange={handleChange('end_date')}
                      onSetFieldTouched={() => setFieldTouched('end_date')}
                    />
                    {touched.end_date && errors.end_date && (
                      <ErrorMsg description={errors.end_date} />
                    )}
                  </Col>
                  <Col lg={3}>
                    <TimeInput 
                      label="Horário final*" 
                      value={values.end_time} 
                      handleChange={handleChange('end_time')}
                      onSetFieldTouched={() => setFieldTouched('end_time')}
                    />
                    {touched.end_time && errors.end_time && (
                      <ErrorMsg description={errors.end_time} />
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <SelectInput 
                      label="Projeto*"
                      handleChange={handleChange('project_id')}
                      onSetFieldTouched={() => setFieldTouched('project_id')}
                      value={values.project_id}
                      fill={projectsFill}
                    />
                    {touched.project_id && errors.project_id && (
                      <ErrorMsg description={errors.project_id} />
                    )}
                  </Col>
                  <Col lg={6}>
                    <SelectInput 
                      label="Status*"
                      handleChange={handleChange('status')}
                      onSetFieldTouched={() => setFieldTouched('status')}
                      value={values.status}
                      fill={getAvailableTaskStatus()}
                    />
                    {touched.status && errors.status && (
                      <ErrorMsg description={errors.status} />
                    )}
                  </Col>
                </Row>
                <Row>
                    <Col lg={12}>{errorApiRequest.length > 0 && <ErrorMsg description={errorApiRequest} />}</Col>
                </Row>
                <Row>
                  <Col lg={8}></Col>
                  <Col lg={2}><BackButtonForm title="Voltar" handleClick={() => history.push(currentPath)}   /></Col>
                  <Col lg={2}><Button title="Cadastrar" handleClick={handleSubmit} /></Col>
                </Row>
              </div>
            )}
      </Formik>)}
    </BaseForm>
  );
};

export default Form;