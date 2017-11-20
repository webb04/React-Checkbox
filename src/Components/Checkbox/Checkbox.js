import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Checkbox.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    const { selected } = this.props;
    this.state = {
      selected
    }
  }

  onSelect() {
    const { selected } = this.state;
    this.setState({selected: !selected})
  }

  render() {
    const { label } = this.props;
    const active = this.state.selected ? 'Checkbox selected' : 'Checkbox';
    return (
      <div className="Checkbox-wrapper" onClick={this.onSelect.bind(this)}>
        <span className={active}/>
        <span className="label">{label}</span>
      </div>
    );
  }
}

Checkbox.defaultProps = {
  label: null,
  selected: null,
}

Checkbox.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
}

export default Checkbox;
