import React, { useState } from "react";

const Header = (props) => {
  const [theme, setTheme] = useState(false);

  function handleMode() {
    setTheme(!theme);

    if (!theme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <header>
      {/* {console.log(props)} */}
      <nav>
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <button className="mode__button" onClick={handleMode}>
          change mode
        </button>
      </nav>
      <h1 className="app-header__title">Weldy Medical Journal</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={props.addJournal}>
          + Add New Entry
        </button>
        <div className="search-field">
          <img
            src="magnifying-glass-solid-full.svg"
            alt="search icon"
            className="search-icon"
          />
          <label className="visually-hidden" htmlFor="search">
            Search Journals
          </label>
          <input
            className="search"
            type="text"
            id="search"
            placeholder="search your journals by date or by description..."
            value={props.searchText}
            onChange={(e) => props.setSearchText(e.target.value)}
            onChange={callSearch}
          />
        </div>
      </aside>
    </header>
  );
};

export default Header;
