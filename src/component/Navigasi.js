import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigasi extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/ganteng">about</Link>
          </li>
        </ul>
      </div>
    );
  }
}
