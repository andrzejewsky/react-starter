# Example of react application template

## Libraries
* Babel
* Eslint
* React
* Redux
* Enzyme
* React-router
* Redux-form
* Boostrap-sass
* Redux-thunk
* Mocha
* Webpack

and others..

## Architecture
* dist/ - production directory, it contain prepared code by wepback
* src/ - contains development code
  * actions/ - contains redux actions in the application
  * components/ - contains components in with presenter and view separation (look at demo)
  * constants/ - constants of the application, like action names
  * containers/ - special kind of component which will fetch some data and load into children components
  * reducers/ - redux reducers
  * stores/ - store configuration
  * stylesheets/ - scss/css styles
* test/ - configuration of test environment

## Npm Commands
* build - build whole application
* start - start a development server (webpack-dev-server)
* test - run tests
