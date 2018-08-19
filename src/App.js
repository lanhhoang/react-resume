import React, { Component } from 'react';
import styles from './App.css';

import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.SideBar}>
          <Profile />
        </div>
        <div className={styles.ContentWrapper}>Resume</div>
      </div>
    );
  }
}

export default App;
