import React from 'react';

function Footer({handleShow,...props}) {
  return (
    <div className="d-block text-right card-footer">
      <button className="mr-2 btn btn-link btn-sm">Cancel</button>
      <button onClick={handleShow} className="btn btn-primary">Add Task</button>
    </div>
  );
}

export default Footer;