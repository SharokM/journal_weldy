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

  return (
    <li className="journal">
      {/* {console.log(props.journal)} */}
      {/* TITLE  */}
      <input
        className="journal__title"
        type="text"
        aria-label="Title"
        placeholder="Entry Date"
        title={props.journal.title}
        onChange={updateTitle}
      />
      {/*   DECRIPTION  */}
      <textarea
        className="journal__description"
        aria-label="Description"
        placeholder="entry..."
        description={props.journal.description}
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
      <span className="journal__delete">X</span>
    </li>
  );
};

export default Journal;
