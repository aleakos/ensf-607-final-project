import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Container from 'react-bootstrap/Container';
import AnimalInfo from './AnimalInfoModal';

const styles = {
  container: {
    paddingLeft: '5%',
  },
  containerRight: {
    paddingLeft: '70%',
  },
};

const Message = (props) => {
  return (
    <Container className="d-inline-flex p-2">
      <ToastContainer style={styles.container}>
        <Toast className="d-inline-block m-1">
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{props.username}</strong>
            <small className="text-muted">{props.timestamp}</small>
          </Toast.Header>
          <Toast.Body className="Dark">{props.message}</Toast.Body>
          <AnimalInfo props={props} />
        </Toast>{' '}
      </ToastContainer>
    </Container>
  );
};

export default Message;
