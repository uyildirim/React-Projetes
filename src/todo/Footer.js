import React from 'react';

function Footer({handleShow,...props}) {
  return (
    <div className="d-block text-right card-footer">
      <button onClick={handleShow} className="btn btn-primary">Add Task</button>
    </div>
  );
}

export default Footer;