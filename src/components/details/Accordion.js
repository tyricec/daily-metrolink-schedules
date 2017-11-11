import React from 'react';

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
          { this.state.show ?
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
            :
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          }
        </div>
      </div>
    );
  }
}
