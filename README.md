# Coding-Assessment-Fall23

## Project Description ##
A simple to-do list app with a few basic requirements

## Requirements ##
- Form/input for user to add items to their to-do list
- Ability to remove an item on the list after adding
- Items should persist on the page after a refresh

## Tech Stack ##
**Front End**
* React.js

**Back End**
* Node.js/Express.js

**Database**
* MongoDB

## Run instructions
- Clone the repo
- In the backend directory, type `npm install` and `nodemon server`. The command-line should say that you are connected to the DB. If there is an issue, the Atlas database might have been deactivated, at which point you can create your own MongoDB on Atlas and change the `MONGO_URI` in `backend/server.js` to your own URI.
- In the frontend directory, type `npm install` and `npm start`


## Tips to Help You Get Started ##
- Fork this repository
- Clone the forked repository in your IDE
- Create client and server folders
- In the client directory, run "npx create-react-app (insert app name)" in the terminal
- In the server directory, run "npm i express" in the terminal
- Make sure to have MongoDB installed on your computer (instructions can be found here: https://www.mongodb.com/docs/manual/administration/install-community/) and connect the database to your server
- Code your solution and push changes to GitHub
