import * as React from 'react';
import './Header.css';

export default class Header extends React.Component<{}, null> {
  render() {
    return (
      <div className="container-header">
        <h2>My Movies..My Choice</h2>
      </div>
    );
  }
}