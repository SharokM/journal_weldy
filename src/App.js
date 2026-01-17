import React from "react";

const App = () => (
  <div className="app">
    <header>
      <nav>
        <logo className="logo">
          <img src="" alt="logo" />
        </logo>
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
          />
        </div>
      </aside>
    </header>

    <ul className="journal-list">
      <li className="journal">
        <input
          className="journal__title"
          type="text"
          aria-label="Title"
          placeholder="Jan 1st"
        />
        <textarea
          className="journal__description"
          aria-label="Description"
          placeholder="Took a nap!"
        />
        <div className="api__section">
          <h5 className="api__title">API INFO FROM WEB:</h5>
          <p className="api__description">RANDOM IMAGE, FACT OR ANY DATA</p>
        </div>
        <span className="journal__delete">X</span>
      </li>

      <li className="journal">
        <input
          className="journal__title"
          type="text"
          aria-label="Title"
          placeholder="Jan 3rd"
        />
        <textarea
          className="journal__description"
          aria-label="Description"
          placeholder="Took another nap.."
        />
        <div className="api__section">
          <h5 className="api__title">AUTHOR NOTES:</h5>
          <p className="api__description">API INFO HERE</p>
        </div>
        <span className="journal__delete">X</span>
      </li>

      <li className="journal">
        <input
          className="journal__title"
          type="text"
          aria-label="Title"
          placeholder="Feb 4th"
        />
        <textarea
          className="journal__description"
          aria-label="Description"
          placeholder="TBD"
        />
        <div className="api__section">
          <h5 className="api__title">AUTHOR NOTES:</h5>
          <p className="api__description">API INFO HERE</p>
        </div>
        <span className="journal__delete">X</span>
      </li>
    </ul>
    <footer>
      <div class="footer__wrapper">
        <h4>
          Powered by <span>clean</span> data & grit
        </h4>
      </div>
    </footer>
  </div>
);

export default App;
