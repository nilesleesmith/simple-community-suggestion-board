# Simple Community Suggestion Board

A public suggestion board for creating, viewing, editing, and deleting community suggestions.

## Overview

Simple Community Suggestion Board is a CRUD application built with Node.js, Express, EJS, and MongoDB.

Visitors can submit a suggestion with a title and description, view existing suggestions, edit them, or delete them. The application does not use user accounts, so anyone with access to the board can edit or delete suggestions.

## Features

- Create suggestions
- View saved suggestions
- Edit suggestion titles and descriptions
- Delete suggestions
- Store suggestion data in MongoDB

## Technologies

<p>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" title="HTML">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" title="CSS">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://nodejs.org/" title="Node.js">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://expressjs.com/" title="Express">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://www.mongodb.com/" title="MongoDB">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="40" height="40">
  </a>
</p>

- [EJS](https://ejs.co/)

## Run Locally

**Requirements:** Node.js, npm, and a MongoDB Atlas database.

1. Clone the repository:

```bash
git clone https://github.com/nilesleesmith/simple-community-suggestion-board.git
```

2. Open the project directory:

```bash
cd simple-community-suggestion-board
```

3. Install the dependencies:

```bash
npm install
```

4. Create `atlas-credentials.env` and add your MongoDB Atlas connection string:

```dotenv
MONGODB_URI="your_mongodb_connection_string"
```

Do not commit database credentials.

5. Start the application:

```bash
npm start
```

6. Open `http://localhost:3000`.

## Live Site

https://simple-community-suggestion-board.onrender.com

## Screenshots

Coming soon! Desktop, tablet, and mobile screenshots will be added here.