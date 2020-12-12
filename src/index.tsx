import React from 'react';
import { render } from 'react-dom';

import logo from './images/snowpack-logo-dark.png';
import wordmark from './images/snowpack-wordmark-black.png';
import styles from './index.module.css';

const App = () => {
  return (
    <h1 className={styles.text}>
      Learn <img className={styles.logo} src={logo} />
      <img className={styles.wordmark} src={wordmark} />
    </h1>
  );
};

render(<App />, document.getElementById('root'));
