import React from "react";
import Journal from "./Journal";

const JournalList = (props) => {
  const keepSearchMatches = (journal) => journal.doesMatchSearch;
  const searchMatches = props.journals.filter(keepSearchMatches);

  const renderJournal = (journal) => (
    <Journal
      onType={props.onType}
      deleteJournal={props.deleteJournal}
      journal={journal}
      key={journal.id}
    />
  );
  const journalElements = searchMatches.map(renderJournal);
  return <ul className="journal-list">{journalElements}</ul>;
};

export default JournalList;

