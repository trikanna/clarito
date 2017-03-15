import React, {Component} from 'react';

const styles = {
  alignSelf: 'center',
  fontWeight: 300,
  fontSize: '11.2px',
  padding: '0 8px',
  active: {
    color: 'blue'
  }
};

class ToolbarHorizontalItem extends Component {
  render() {
    return (
      <div style={Object.assign({}, styles, this.props.active && styles.active)}>{this.props.label}</div>
    );
  }
}

ToolbarHorizontalItem.propTypes = {
  active: React.PropTypes.boolean,
  label: React.PropTypes.string,
  type: React.PropTypes.oneOf(['text', 'icon', 'dropdown', 'checkbox'])
};

ToolbarHorizontalItem.defaultProps = {
  type: 'text',
  label: 'Label Name',
  active: false
};

export default ToolbarHorizontalItem;
