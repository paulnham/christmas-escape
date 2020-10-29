import React from 'react';
import {Switch, Route, HashRouter} from "react-router-dom";
import styles from './App.module.css';
import PasswordAnswer from './PasswordAnswer';

function App() {
  return (
    <div className={styles.app}>
      <HashRouter>
        <Switch>
          <Route path="/soul">
            <PasswordAnswer stone="soul" correctAnswer="maze" hint="where are you?" initShow/>
          </Route>
          <Route path="/space">
            <PasswordAnswer stone="space" correctAnswer="maze" hint="where are you?" initShow={false}/>
          </Route>
          <Route path="/time">
            <PasswordAnswer stone="time" correctAnswer="16" hint="it's a number" initShow={false}/>
          </Route>
          <Route path="/mind">
            <PasswordAnswer stone="mind" correctAnswer="3645" hint="it's a 4 digit number" initShow={false}/>
          </Route>
          <Route path="/">
            <h1>Welcome to Gather Town Escape Room!</h1>
            <p>But sorry you are in the wrong place.</p>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
