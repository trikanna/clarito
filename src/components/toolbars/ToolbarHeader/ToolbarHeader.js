import React, {Component} from 'react';

const styles = {
  header: {
    borderBottom: '1px solid rgb(187, 186, 188)',
    minHeight: '22px',
    boxShadow: 'inset 0 1px 0 #f2f1f2',
    WebkitAppRegion: 'drag',

    gray: {
      background: 'linear-gradient(#ecebed, #d6d5d7)'
    },
    white: {
      background: 'white'
    },
    transparent: {
      background: 'transparent'
    }
  },
  title: {
    WebkitFontSmoothing: 'subpixel-antialiased',
    margin: '2.6pt 0 0 0',
    fontWeight: 400,
    textAlign: 'center',
    cursor: 'default',
    height: '14px',
    fontSize: '13px',
    color: '#423F42',
    letterSpacing: '-0.31px'
  }
};

class ToolbarHeader extends Component {
  render() {
    return (
      <header style={Object.assign({}, styles.header, styles.header[this.props.color])} className="clearfix">

        {this.props.title && <div style={styles.title}>{this.props.title}</div>}

        {this.props.children}

      </header>
    );
  }
}

ToolbarHeader.propTypes = {
  title: React.PropTypes.string,
  inset: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['gray', 'white', 'transparent'])
};

ToolbarHeader.defaultProps = {
  color: 'gray'
};

export default ToolbarHeader;
