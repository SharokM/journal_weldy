import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import JournalList from "./JournalList.js";

const App = () => {
  // JOURNAL BOX STATE
  const [journals, setJournals] = useState([
    {
      id: 0,
      title: "eat",
      description: "reese peanut butter cups",
      doesMatchSearch: true,
    },
    {
      id: 1,
      title: "sleep",
      description: "eight hours",
      doesMatchSearch: true,
    },
    {
      id: 2,
      title: "Learn medical codes",
      description: "build an awesome ui to help",
      doesMatchSearch: true,
    },
    {
      id: 3,
      title: "OR",
      description: "Submit report",
      doesMatchSearch: true,
    },
  ]);

  // SEARCH BOX STATE
  const [searchText, setSearchText] = useState("search");
  // API STATE
  const [api, setApi] = useState("");

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
      <Header searchText={searchText} />
      <JournalList journals={journals} />
    </div>
  );
};

export default App;
