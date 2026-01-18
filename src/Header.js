import React from "react";

const Header = (props) => {
  return (
    <header>
      {/* {console.log(props)} */}
      <nav>
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <button className="mode__button">change mode</button>
      </nav>
      <h1 className="app-header__title">Weldy Medical Journal</h1>
      <aside className="app-header__controls">
        <button className="add-new">+ Add New Entry</button>
        <div className="search-field">
          <img
            src="magnifying-glass-solid-full.svg"
            alt="search icon"
            className="search-icon"
          />
          <label className="visually-hidden" for="search">
            Search Journals
          </label>
          <input
            className="search"
            type="text"
            id="search"
            placeholder="search your journals by date or by description..."
            value={props.searchText}
          />
        </div>
      </aside>
    </header>
  );
};

export default Header;
