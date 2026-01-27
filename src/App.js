import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import { Footer } from "./Footer.js";
import JournalList from "./JournalList.js";

const App = () => {
  //  .............state

  // JOURNAL BOX STATE
  const [journals, setJournals] = useState([]);
  // SEARCH BOX STATE
  const [searchText, setSearchText] = useState("");
  // API STATE
  const [api, setApi] = useState("");

  //  .............add entry

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

  //  .............API

  // useEffect(() => {
  //   const fetchData = async () => {
  //       try {
  //         const request = await fetch("https://www.who.int/api/news/newsitems");
  //         const result = await request.json()
  //         setApi(result)
  //  console.log(result)
  //       } catch (error) {
  //         console.log("There appears to be an error fetching data", error);
  //         console.error("error is", error);
  //       }
  //   }
  //   fetchData();
  // }, []);

  //  .............search type func

  const onType = (editMeId, updatedKey, updatedValue) => {
    const updatedJournals = journals.map((journal) => {
      if (journal.id !== editMeId) {
        return journal;
      } else if (updatedKey === "title") {
        return { ...journal, title: updatedValue };
      } else {
        return { ...journal, description: updatedValue };
      }
    });
    setJournals(updatedJournals);
    // setJournal({ journals, ...updatedJournals });
  };

  //  .............search bar

  const onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedJournals = journals.map((journal) => {
      if (!newSearchText) {
        return { journal, doesMatchSearch: true };
      } else {
        const title = (journal.title || "").toLowerCase();
        const description = (journal.description || "").toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        return { journal, doesMatchSearch: hasMatch };
      }
    });
    setSearchText(newSearchText), setJournals(updatedJournals);
  };

  //   ..... delete entry
  const deleteJournal = (journalId) => {
    console.log("delete btn pushed");
    const updatedJournals = journals.filter(
      (journal) => journal.id !== journalId
    );
    setJournals(updatedJournals);
  };

  useEffect(() => {
    try {
      localStorage.setItem(
        "savedData",
        JSON.stringify({ journals, searchText, api })
      );
    } catch (error) {
      console.log("uh oh! theres an error", error);
      console.error("error is", error);
    }
  }, [journals, searchText, api]);

  useEffect(() => {
    try {
      const stateString = localStorage.getItem("savedData");
      if (stateString) {
        const savedData = JSON.parse(stateString);
        setJournals(savedData.journals || []);
        setSearchText(savedData.searchText || "");
        setApi(savedData.api || "");
      }
    } catch (error) {
      console.log("uh oh! theres an error", error);
      console.error("error is", error);
    }
  }, []);

  return (
    <div className="app">
      <Header
        addJournal={addJournal}
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={onSearch}
      />
      <JournalList
        onType={onType}
        journals={journals}
        deleteJournal={deleteJournal}
      />
      <Footer />
    </div>
  );
};

export default App;
