import React from 'react';
import { Manager, Target, Popper } from 'react-popper';

const styles = {
  container: {
    position: 'relative',
  },
  dropdown: {
    backgroundColor: 'rgb(255,255,255)',
    color: 'rgb(0,0,0)',
    boxShadow: '0 0 4px rgba(0,0,0,0.75)',
  },
  dropdownItem: {
    fontSize: '0.8em',
    padding: 8,
  }
};

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    }
  }

  onSelect = (item) => {
    this.setState({ expanded: false });
    this.props.onSelect(item);
  }

  toggleDropdown = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div style={styles.container}>
        <Manager>
          <Target>
            <div onClick={this.toggleDropdown}>{this.props.selected}</div>
          </Target>
          {this.state.expanded &&
            <Popper placement="bottom" style={styles.dropdown}>
              {this.props.items.map(item => (
                <div
                  onClick={() => this.onSelect(item)}
                  style={styles.dropdownItem}
                  key={item}>
                 {item}
                </div>
              ))}
            </Popper>
          }
        </Manager>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  onSelect: () => {},
};
