import React, {Component} from 'react';

import './WindowRow.css';

class WindowRow extends Component {
  render() {
    return (
      <div className="WindowRow">
        {this.props.children}
      </div>
    );
  }
}

export default WindowRow;
