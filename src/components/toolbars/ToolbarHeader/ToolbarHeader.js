import React, {Component} from 'react';

import './ToolbarHeader.css';

class ToolbarHeader extends Component {

  renderTitle() {
    if (this.props.title) {
      return (<div className="ToolbarHeader--title">{this.props.title}</div>)
    }
  }

  render() {
    return (
      <header className="Toolbar ToolbarHeader clearfix">
        {this.renderTitle()}
        {this.props.children}
      </header>
    );
  }
}

ToolbarHeader.propTypes = {
  title: React.PropTypes.string,
  inset: React.PropTypes.bool
};

export default ToolbarHeader;
