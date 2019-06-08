import React, { Component } from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'
import { Header } from './components/common'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCHVFrAngiyCIaMsxm4GaB5h-HRVdYdeCU",
      authDomain: "manager-5398a.firebaseapp.com",
      databaseURL: "https://manager-5398a.firebaseio.com",
      projectId: "manager-5398a",
      storageBucket: "manager-5398a.appspot.com",
      messagingSenderId: "122955867311",
      appId: "1:122955867311:web:e373e995bca24a64"
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
