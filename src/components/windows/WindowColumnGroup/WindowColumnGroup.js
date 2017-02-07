import React, {Component} from 'react';

import './WindowColumnGroup.css';

class WindowColumnGroup extends Component {
  render() {
    return (
      <div className="WindowColumnGroup">
        {this.props.children}
      </div>
    );
  }
}

export default WindowColumnGroup;
