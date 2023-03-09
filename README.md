# How to

## Run the application

- Execute `npm start` command
- Open [http://localhost:3000/weather](http://localhost:3000/weather) to view it in the browser

## Run the tests

- Execute `npm test` command

# Followed approach

- Understand the API (request chain and response structure)
- Create components structure and routing
- Create code structure to retrieve the data from the API
- Handle data flows in components that communicate with API (loading, error and success state)
- Adapt components to use the data from API to show the information
- Improve global look and feel

# Possible improvements

- Loading states (currently only showing a text)
- Cache responses from API. At least, for the request to retrieve a location's coordinates
- Global look and feel
- Test coverage
- Fix: When navigating to a `Location` page sometimes the error message is showing for a split second

---

_Note:_ This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Bulma](https://bulma.io) as CSS framework.
