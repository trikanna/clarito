import React, {Component} from 'react';

import './WindowColumn.css';

class WindowColumn extends Component {
  render() {
    return (
      <div className={"WindowColumn"
      + (this.props.transparent ? ' WindowColumn__transparent' : '')
      + (this.props.spaced ? ' WindowColumn__spaced' : '')
      + (this.props.gray ? ' WindowColumn__gray' : '')
      + (this.props.white ? ' WindowColumn__white' : '')
      + (this.props.sidebar ? ' WindowColumn__sidebar' : '')
    }>
        {this.props.children}
      </div>
    );
  }
}

export default WindowColumn;
