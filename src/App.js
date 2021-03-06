import React from 'react';
import './App.css';
import MainList from './component/MainList'
import {Provider} from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store} >
    <div className="App">
    <MainList />
    </div>
    </Provider>
  );
}

export default App;
