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

  return (
    <div className="app">
      <Header
        addJournal={addJournal}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <JournalList journals={journals} />
    </div>
  );
};

export default App;
