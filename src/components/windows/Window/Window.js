import React, {Component} from 'react';

import './Window.css';

class Window extends Component {
  render() {
    return (
      <div className="Window">
        {this.props.children}
      </div>
    );
  }
}

export default Window;
