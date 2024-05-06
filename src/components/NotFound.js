import React from "react";
import Toast from 'react-bootstrap/Toast';

const NotFound = () => {
  return (
    <div>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! Find Proper resource</Toast.Body>
      </Toast>
    </div>
  );
};

export default NotFound;
