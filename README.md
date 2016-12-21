## React Native Redux sample project

This is a sample app intended to show the growth of an app as it adds complexity. It is not intended to demonstrate best practices since I am just learning the React Native ecosystem, therefore I don't know what they are.

The app is organized into branches.

`00-basic-setup`: react native init, basic setup; file system and README files to explain what's in the folders

`01-simple-counter`: a simple counter on the index page that counts up when clicked

`02-routing`: added in a router, moved simple counter to a new view

`03-redux-counter`: brought redux and react-native-router-flux into the project, got counter working with redux

`04-asynch-counter`: added asynch behavior into the counter, following this guide.http://redux.js.org/docs/advanced/AsyncActions.html`

`05-testing`: added in Jest tests

### Getting going
1. clone the repo
1. cd into new repo directory
1. `npm install`
1. `npm start` -- this will start the packager
1. open a new terminal window
1. start the app in IOS or Android with `npm run ios` or `npm run android`
1. if it all goes well when you start you should see this (if you launch both):

![image of ios and android screens](https://cloud.githubusercontent.com/assets/704514/20652461/94c679e4-b4ae-11e6-93c1-8e538e8803ee.png)
