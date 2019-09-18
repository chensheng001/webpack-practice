import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component {
  render() {
    return (
      <div>
        <img src={require('./logo.png')} />
        <div className={styles.root}>{config.text}22</div>
      </div>

    )
  }
}

export default Greeter;