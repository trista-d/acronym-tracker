# Acronym Tracker

## Run Locally
Tools required:
- git
- npm
- React
- Firebase

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
