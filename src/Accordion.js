import React from 'react';

import arrowDown from './arrow_down.svg';
import arrowUp from './arrow_up.svg';

const styles = {
  expandContainer: {
    borderLeft: '1px solid rgb(0,0,0)',
    borderRight: '1px solid rgb(0,0,0)',
    borderBottom: '1px solid rgb(0,0,0)',
    display: 'flex',
    justifyContent: 'center',
    padding: 8,
  },
};

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const showStyle = { display: 'none' };
    showStyle.display = this.state.show ? 'block' : 'none';
  
    return (
      <div>
        <div style={showStyle}>
          {this.props.children}
        </div>
        <div onClick={this.toggle} style={styles.expandContainer}>
          <img
            alt={this.state.show ? 'Arrow-Up' : 'Arrow-Down'}
            style={styles.arrowIcon}
            src={this.state.show ? arrowUp : arrowDown} />
        </div>
      </div>
    );
  }
}
