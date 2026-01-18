import React from "react";

const Journal = () => {
  return (
    <li className="journal">
      <input
        className="journal__title"
        type="text"
        aria-label="Title"
        placeholder="Feb 4th"
      />
      <textarea
        className="journal__description"
        aria-label="Description"
        placeholder="TBD"
      />
      <div className="api__section">
        <h5 className="api__title">AUTHOR NOTES:</h5>
        <p className="api__description">API INFO HERE</p>
      </div>
      <span className="journal__delete">X</span>
    </li>
  );
};

export default Journal;
