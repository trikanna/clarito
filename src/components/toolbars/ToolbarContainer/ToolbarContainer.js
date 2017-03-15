import React, { Component } from 'react';

const styles = {
  base: {
    margin: 0,
    paddingBottom: 0,
    WebkitAppRegion: 'drag',
    height: '37px',
    lineHeight: '36px'
  },
  centered: {
    textAlign: 'center'
  }
};

class ToolbarContainer extends Component {
  render() {
    return (
      <div style={Object.assign({}, styles.base, this.props.centered ? styles.centered : {})} className="clearfix">
        {this.props.children}
      </div>
    );
  }
}

ToolbarContainer.propTypes = {
  centered: React.PropTypes.bool
};

ToolbarContainer.defaultProps = {
  centered: false
};

export default ToolbarContainer;
