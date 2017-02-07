import React, {Component} from 'react';

import './ToolbarContainer.css';

class ToolbarContainer extends Component {

  render() {
    return (
      <div className={"ToolbarContainer clearfix"
      + (this.props.centered ? ' text-center' : '')
      }>
        {this.props.children}
      </div>
    );
  }
}

ToolbarContainer.propTypes = {
  centered: React.PropTypes.bool
};

export default ToolbarContainer;
