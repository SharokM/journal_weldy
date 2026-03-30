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

  //  .............API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(
          "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=38212345&retmode=json"
        );
        const result = await request.json();

        const headline = result.result["38212345"].title;
        setApi(headline);
      } catch (error) {
        console.log("There appears to be an error fetching data", error);
      }
    };

    fetchData();
  }, []);

  //  .............add entry


  const addJournal = async () => {
    try {
      const searchRequest = await fetch(
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=medicine&retmax=20&retmode=json"
      );

      if (!searchRequest.ok) {
        throw new Error("Search request failed");
      }

      const searchResult = await searchRequest.json();
      const ids = searchResult.esearchresult.idlist;

      if (!ids.length) return;

      const randomId = ids[Math.floor(Math.random() * ids.length)];

      const summaryRequest = await fetch(
        `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${randomId}&retmode=json`
      );

      if (!summaryRequest.ok) {
        throw new Error("Summary request failed");
      }

      const summaryResult = await summaryRequest.json();
      const headline = summaryResult.result[randomId].title;

      const newJournal = {
        id: Date.now(),
        title: "",
        description: "",
        api: headline,
        url: `https://pubmed.ncbi.nlm.nih.gov/${randomId}/`, 
        doesMatchSearch: true,
      };

      setJournals((journals) => [newJournal, ...journals]);
    } catch (error) {
      console.error("API error:", error);
      alert("Could not fetch article. Try again in a moment.");
    }
  };

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
  };

  //  .............search bar

  const onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedJournals = journals.map((journal) => {
      if (!newSearchText) {
        return { ...journal, doesMatchSearch: true };
      } else {
        const title = (journal.title || "").toLowerCase();
        const description = (journal.description || "").toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        return { ...journal, doesMatchSearch: hasMatch };
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
