# just-tech-news
## Description
This application creates the database and back-end structure for a news aggregate site called "Just Tech News," where a user can add articles, as well as comment, and vote on them.

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Technologies](#technologies)
  * [Testing](#testing)
  * [Deployment](#deployment)
  * [Contribution](#contribution)

## Technologies
    JavaScript ES6
    Node.js
    Express.js
    dotenv (npm package used to store environmental variables used in a project locally so sensitive data like root passwords are not exposed on GitHub)
    MySQL
    Sequelize (npm package for integrating MySQL and Node.js)
    bcrypt (npm package for password hashing)
    handlebars (npm package for a template engine used for html and javascript integration on the front-end)
    Heroku

## Installation
The user should clone the repository from GitHub. This application requires Node.js, Express.js, and Sequelize. To connect to the database run mysql -u root -p and enter password from .env file. Then source the schema.sql. To seed the file run npm run seed. Finally to connect to the server run npm start.
      npm init
      npm install

## Usage
Run the following command at the root of your project:
        mysql -u root -p
        enter passcode
        source db/schema.sql
        quit
        npm run seed
        npm start

## Testing
Tests are conducted with Jest.

## Deployment


## Contribution
Created with ❤️ by Deepa Krishnan


