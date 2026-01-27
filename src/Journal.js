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
        placeholder="entry..."
        value={props.journal.description}
        onChange={updateDescription}
      />
      {/* API SECTION  */}
      <textarea
        className="api__section"
        aria-label="API section"
        placeholder="API data goes in here..."
        description={props.journal.api}
      />
      {/* DELETE BUTTON  */}
      <span className="journal__delete" onClick={handleClick}>
        X
      </span>
    </li>
  );
};

export default Journal;
