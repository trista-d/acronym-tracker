# Acronym Tracker

## Run Locally
Tools required:
- [Node.js](https://nodejs.org/en/download) and npm package manager

1. Download or clone this repository
2. In a terminal, nagivate inside the directory with the project files
3. Run the command `npm install` to download the required dependencies
4. Run `npm start` and visit localhost:3000 to view the application


## Files
- AddForm.js
  - screen to add an acronym and definition
- App.css
  - styles everything renederd in App.js (AddForm, SearchForm)
- App.js
  - decides whether to render Aearch or Add Acronym screen
- BCTypography.js
  - component to style fonts according to the [BC Design System](https://developer.gov.bc.ca/Design-System/Typography)
- SearchForm.js
  - screen to search for and delete acronyms
- firebase.js
  - component to initialize Firebase app and [Realtime Database](https://firebase.google.com/docs/database)
- index.js
  - renders App.js inside of index.html


## Features
#### The application is hosted [here](https://acronym-tracker.web.app/)
- view all acronyms in aplhabetical order
- search for an existing acronym
- delete an existing acronym
- add a new acronym

## Future Ideas
- must be authenticated to add/delete acronyms
- different backend (NextJS or a relational database)
- have a choice to sort acronyms alphabetically or by creation date
- add/delete more than one acronym at a time
- currently, if an acornym is already in the database then when the same acronym is added, the old one is overwritten. Instead could not let a user replace an exisitng acronym
