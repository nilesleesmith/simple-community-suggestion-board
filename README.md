# Community Suggestion Board

This application lets visitors create, view, edit, and delete suggestions. It follows the MongoDB driver callback structure used in `savage-demo`.

## Configure MongoDB Atlas

Create a file named `atlas-credentials.env` in this folder. Use the connection details provided by MongoDB Atlas:

```dotenv
MONGODB_USERNAME="your_database_username"
MONGODB_PASSWORD="your_database_password"
MONGODB_URI="mongodb+srv://your_database_username:your_url_encoded_password@your_cluster_host/community_suggestion_board?retryWrites=true&w=majority"
```

Use your real cluster host and credentials. URL-encode reserved characters in the password. The application reads `MONGODB_URI`; it does not use the username and password variables separately.

Do not commit `atlas-credentials.env`. The `.gitignore` file excludes environment files and `node_modules`.

## Start the application

From this folder, run:

```powershell
npm install
npm start
```

The `start` script loads `atlas-credentials.env` with Node.js's built-in `--env-file` option. The application uses MongoDB Atlas and the `community_suggestion_board` database. It does not fall back to a local MongoDB server.

Open http://localhost:3000.

## CRUD

- Create: submit a suggestion.
- Read: view the saved suggestions.
- Update: choose Edit and save the changes.
- Delete: choose Delete.

The application has no user accounts. Anyone who can reach the board can edit or delete suggestions.
