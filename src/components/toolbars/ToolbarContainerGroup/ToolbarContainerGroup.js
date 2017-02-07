import React, {Component} from 'react';

import './ToolbarContainerGroup.css';

class ToolbarContainerGroup extends Component {

  render() {
    return (
      <div className={"ToolbarContainerGroup clearfix"
      + (this.props.right ? ' pull-right' : '')
      }>
        {this.props.children}
      </div>
    );
  }
}

ToolbarContainerGroup.propTypes = {
  right: React.PropTypes.bool
};

export default ToolbarContainerGroup;
