# Acronym Tracker
The application is hosted [here](https://acronym-tracker.web.app/)

## Run Locally
Tools required:
- [Node.js](https://nodejs.org/en/download) and npm package manager

1. Download or clone this repository
2. In a terminal, nagivate inside the directory with the project files
3. Run the command `npm install` to download the required dependencies
4. Run `npm start` and visit localhost:3000 to view the application

## Files
- index.js
  - renders App.js inside of index.html
- typography.js
  - component to style fonts according to the [BC Design System](https://developer.gov.bc.ca/Design-System/Typography)
- firebase.js
  - component to initialize Firebase app and [Realtime Database](https://firebase.google.com/docs/database)
- App.js
  - switches between search and add screens
- AddForm.js
- SearchForm.js

## Features
#### View a demo video [here](#)
- view all acronyms in aplhabetical order
- search for an existing acronym
- add a new acronym

## Future Ideas
- authentication
- backend (NextJS, relational database)
- delete existing acronym
- sort acronyms alphabetically or by creation date
- add more than one acronym at a time
- currently, if an acornym is already in the database then when the same acronym is added, the old one is overwritten. Instead could not let a user replace an exisitng acronym
