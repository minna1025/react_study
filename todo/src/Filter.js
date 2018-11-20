import React, { Component } from 'react';

class Filter extends Component {
  static defaultProps = {
    filter: {
      showList: [],
      showWhat: 'all'
    }
  }

  showAll = () => {
    const { filter, onFilter } = this.props;
    onFilter('all');
  }

  filterdoit = () => {
    const { filter, onFilter } = this.props;
    onFilter('doit');
  }

  filterComplete = () => {
    const { filter, onFilter } = this.props;
    onFilter('complete');
  }

  render() {
    return(
      <ul className="filterList">
        <li onClick={this.showAll}>다보시오</li>
        <li onClick={this.filterdoit}>해라!!!!!</li>
        <li onClick={this.filterComplete}>다함?!?!!</li>
      </ul>
    );
  }
}

export default Filter;