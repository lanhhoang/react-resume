import React, { Component } from 'react';
import styles from './App.css';

import Profile from './components/Profile/Profile';

import person from './data/data';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.SideBar}>
          <Profile name={person.name} profession={person.profession} />
        </div>
        <div className={styles.ContentWrapper}>Resume</div>
      </div>
    );
  }
}

export default App;
