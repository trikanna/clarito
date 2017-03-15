import React, {Component} from 'react';

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 30,
    borderBottom: '1px solid rgb(187, 186, 188)'
  }
};

class ToolbarHorizontal extends Component {
  render() {
    return (
      <div style={styles.base}>{this.props.children}</div>
    );
  }
}

ToolbarHorizontal.propTypes = {
  title: React.PropTypes.string,
  inset: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['gray', 'white', 'transparent'])
};

ToolbarHorizontal.defaultProps = {
  color: 'gray'
};

export default ToolbarHorizontal;
