import React from 'react';

const AddBtn = () => {
  return (
    <div className="fixed-action-btn click-to-toggle">
      <a className="btn-floating btn-large blue darken-2">
        <i className="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li>
          <a
            href="#add-log-modal"
            className="btn-floating purple modal-trigger"
          >
            <i className="material-icons">note_add</i>
          </a>
        </li>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#add-tech-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
