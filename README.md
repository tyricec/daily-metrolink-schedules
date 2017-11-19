# Daily Metrolink Schedules

App Link: https://daily-metrolink-schedules.herokuapp.com/

The daily metrolink schedules is a experiment of displaying timetables for metrolink. The idea behind this design is slicing the timetable vertically to allow mobile users to avoid a horizontal scroll.

This app was created with [create-react-app](https:/github.com/facebookincubator/create-react-app).

## Getting Started

### Requirements

- NodeJS
- NPM

### Installation

Use npm and yarn to install dependencies:

npm:
```
npm install
```

yarn:
```
yarn install
```

The app was built with [create-react-app](https:/github.com/facebookincubator/create-react-app), which includes a server that can be started with:

npm:
```
npm start
```

yarn:
```
yarn start
```

The app depends on [daily-metrolink-schedules-api](https://github.com/tyricec/daily-metrolink-schedules-api) for the data required to build timetables. By default, it is expected to be running at http://localhost:3000. However, this can be adjusted by setting the environment variable ```REACT_APP_BACKEND_HOST``` to the hostnme of the api.

```
REACT_APP_BACKEND_HOST=mysterious-brushlands-30472.herokuapp.com
```

## Built with

- [ReactJS](https://reactjs.org/)
