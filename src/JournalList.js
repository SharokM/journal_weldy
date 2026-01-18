import React from "react";
import Journal from "./Journal";

const JournalList = () => {
  return (
    <ul className="journal-list">
      <Journal />
      <Journal />
      <Journal />
    </ul>
  );
};

export default JournalList;
