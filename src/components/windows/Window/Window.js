import React, { Component } from 'react';

const styles = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  fontSize: '9pt',
  fontWeight: 800
};

class Window extends Component {
  render() {
    return (
      <div style={styles}>
        {this.props.children}
      </div>
    );
  }
}

export default Window;
