# Food App Native

Repository for app to make food and services delivery across the world with paypal and contries' local banks
transactions.

## Installation

Use the packages manager NPM or Yarn to install the dependencies.

```bash
npm install or yarn install
```

## Node Version

This project works under Expo framework to make universal react applications.
The required node version to get the project up and running is 14.0.0.

## How To Run

Use the correspondant node version and run 'yarn start' or 'npm start' for web view.
Run yarn run app or npm run app for mobile view.

You will need to have expo in your phone in order to run the mobile view, for more information on how to get expo with the local host environment running please follow this documentation https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet

## ReduxJS Implementation

With the implementation of ReduxJS Toolkit, a library that provides functions to avoid the complicated way to implement redux, we will only need single file to create a reducer and a global state (reference: inside core/redux/user/index) and this will work in both reactjs web and react native views.

If you create new reducer, don't forget to put it inside /core/redux/rootReducer.js

Then if you want to inject state in the components or dispatch an action to update the store, you will only need useDispatch and useSelector provided by react-redux (refence: web/src/components/landing-page/index)

## Technologies used

This project works under Expo framework for the mobile aplication (React Native)
and classic ReactJS web implementation

This project is both React Native and ReactJS projects in one big project.
With the correct babel and webpack implementations, we've been abled to combine the two worlds to dynamically import the correct components into web and mobile views.

## Working with mock data

If you want to work with mock data, please run the following steps

1. npm i -g json-server
2. Make sure you have a json file in the data folder with the data you want to have
3. Open up a terminal and run json-server --watch JSON_PATH:
   ```bash
      example - json-server --watch ./core/data/db.json
   ```
4. Make sure the server is up
5. Now add data to your json like this (notice that if you create a new property, you will have it available in http://localhost:3000/user or /services)

   ```bash
       {
           "user": {},
           "services": {},
       }
   ```

6. Hit the fake api and return the data

This link provides a more detail information of how it works [JSONServer](https://www.npmjs.com/package/json-server)

## How to make PRs

The first thing you need to know is that all [SoftArs](http://softars.com/) projects will be or are in production and seek to maintain its structure across all the app, with that been said, you should follow the following steps:

1. Make sure you've review your ENTIRE code and you are completly sure about your changes.
2. Tag the [SoftArs](http://softars.com/) developers team to review your changes and approve them if they are good to go.
3. Make sure your commits are descriptive about your current change, the correct way to make commits is: [JIRA_TICKET] - SHORT_TITLE.

Example:

```bash
[FAN-233] - Added login button to submit and hit API
```

4. Make sure to add descriptive title and description once you've raised your PR.

## General Recommendations and rules

Please follow the next document: https://docs.google.com/document/d/1mN79G1QnL8YKKX9Rvtm3hYOKXeNl2m-4I1vb8vPrw7Q/edit?ts=5eade5b2

## Company

[SoftArs](http://softars.com/)
