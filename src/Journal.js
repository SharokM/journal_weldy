import React from "react";

const Journal = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.journal.id;
    props.onType(editMeId, "title", updatedValue);
  };

  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.journal.id;
    props.onType(editMeId, "description", updatedValue);
  };

  const handleClick = () => {
    props.deleteJournal(props.journal.id);
  };

  return (
    <li className="journal">
      {/* {console.log(props.journal)} */}
      {/* TITLE  */}
      <input
        className="journal__title"
        type="text"
        aria-label="Title"
        placeholder="Entry Date"
        value={props.journal.title}
        onChange={updateTitle}
      />
      {/*   DECRIPTION  */}
      <textarea
        className="journal__description"
        aria-label="Description"
        placeholder="write your entry..."
        value={props.journal.description}
        onChange={updateDescription}
      />
      {/* API SECTION  */}
      <p className="api-description">New Study (available in Moodle):</p>
      <textarea
        className="api__section"
        placeholder="API data goes in here..."
        defaultValue={props.journal.api}
        readOnly
      />
      <a className="api-link"
      href={props.journal.url}
      target="_blank"
      rel="noopener noreferrer"
      >View Full Study?</a>

      {/* DELETE BUTTON  */}
      <span className="journal__delete" onClick={handleClick}>
        X
      </span>
    </li>
  );
};

export default Journal;
