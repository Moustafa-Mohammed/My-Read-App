# MyReads Project

This is the complete project where you can search for a book, change the shelf of a book and display the books in their current shelf.

## TL;DR

To get started with the App:

* install all App dependencies with `npm install`
* start the App server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├──components
    │   ├── Book # A function component represents each book 
    │   │── BookShelf   # A function component represents a select menu that controls the shelf of the book
    │   │── BooksList   # A function component  that maps over the books and displays the search results
    │   │── Home # A function component represents that diaplays the main shelfs with their books
    │   │── SearchBooks # A component that contains the search bar and the searched books result
    │   │── BookShelf
    │   └── BookShelf
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of the app. Contains all of the components.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


