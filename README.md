Weldy Medical Journal

Weldy Medical Journal is a small React application that allows users to create and manage medical journal entries while pulling medical study data from a public medical API.
The React project uses React Hooks, API fetch calls, and browser local storage.


What This App Does

Allows users to add journal entries
Lets users type a title and description for each entry
Pulls a medical study title from the PubMed (NCBI) API
Displays the study title inside each journal entry (read-only)
Allows users to search journal entries
Saves all data using browser localStorage (when activated)

Technologies Used
React.js
React Hooks (useState, useEffect)
JavaScript
HTML5
CSS3
PubMed / NCBI Entrez API

Project Files
App.js – handles state, API calls, search, and local storage
Journal.js – displays a single journal entry
JournalList.js – displays all journal entries
Header.js – add journal and search input
Footer.js – footer component

API Information
This project uses the NCBI Entrez PubMed API.

When a new journal is added:
The app searches PubMed for medical articles
A random article ID is selected
The article title is fetched and saved to the journal entry
The API data is for informational use only.

How Data Is Saved
Journal entries are saved to browser localStorage
Data is automatically loaded when the app refreshes
No backend or database is used

How To Run The App
Install dependencies
npm install

Start the app
npm start

Open in browser
http://localhost:3000

Notes
No user accounts or authentication
API calls are unauthenticated
Subject to public API rate limits

To run this project, you need:

 Node.js (version 16 or higher)
 Npm (comes with Node.js)
 A modern web browser

Author
S McDonnaugh
Weldy Medical Journal
Jan 2026 – Present
