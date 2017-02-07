import React, {Component} from 'react';

import './WindowContent.css';

class WindowContent extends Component {
  render() {
    return (
      <div className={"WindowContent" + (this.props.transparent ? ' WindowContent__transparent' : '') + (this.props.spaced ? ' WindowContent__spaced' : '') + (this.props.gray ? ' WindowContent__gray' : '')}>
        {this.props.children}
      </div>
    );
  }
}

WindowContent.propTypes = {
  transparent: React.PropTypes.bool,
  spaced: React.PropTypes.bool,
  gray: React.PropTypes.bool
};

export default WindowContent;
