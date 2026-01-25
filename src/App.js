import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import JournalList from "./JournalList.js";

const App = () => {
  // JOURNAL BOX STATE
  const [journals, setJournals] = useState([]);
  // SEARCH BOX STATE
  const [searchText, setSearchText] = useState("");
  // API STATE
  const [api, setApi] = useState("");

  const addJournal = () => {
    const newJournal = {
      id: Date.now(),
      title: "",
      description: "",
      api: "",
      doesMatchSearch: true,
    };
    setJournals((journals) => [newJournal, ...journals]);
  };

  // use effect for API
  // useEffect(() => {
  //   const fetchData = async () = {
  //       try {
  //         const request = await fetch("https://www.who.int/api/news/newsitems");
  //         const result = await request.JSON()
  //         setApi(result)
  //  console.log(result)
  //       } catch (error) {
  //         console.log("There appears to be an error fetching data", error);
  //         console.error("error is", error);
  //       }
  //   }
  //   fetchData();
  // }, []);

  const onType = (editMeId, updatedKey, updatedValue) => {
    const updatedJournals = journals.map((journal) => {
      if (journal.id !== editMeId) {
        return journal;
      } else if (updatedKey === "title") {
        journal.title = updatedValue;
        return journal;
      } else {
        journal.description = updatedValue;
        return journal;
      }
    });
    setJournals(updatedJournals);
    // setJournal({ journals, ...updatedJournals });
  };

  return (
    <div className="app">
      <Header
        addJournal={addJournal}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <JournalList onType={onType} journals={journals} />
    </div>
  );
};

export default App;
