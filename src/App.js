import React, { Component } from 'react';
import styles from './App.css';

import Profile from './components/Profile/Profile';

import person from './data/data';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.SideBar}>
          <Profile
            name={person.name}
            profession={person.profession}
            socials={person.socials}
          />
        </div>
        <div className={styles.ContentWrapper}>
          <div className={styles.Content}>Resume</div>
        </div>
      </div>
    );
  }
}

export default App;
