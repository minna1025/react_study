import React, { Component } from 'react';

class Filter extends Component {
  static defaultProps = {
    filter: {
      showList: [],
      showWhat: 'all'
    }
  }

  showAll = () => {
    const { onFilter } = this.props;
    onFilter('all');
  }

  filterdoit = () => {
    const { onFilter } = this.props;
    onFilter('doit');
  }

  filterComplete = () => {
    const { onFilter } = this.props;
    onFilter('complete');
  }

  render() {
    const active = this.props.active;
    return(
      <ul className="filterList" id='filterList'>
        {
          active === 'all'
            ? (<li onClick={this.showAll} className="active">ALL</li>)
            : (<li onClick={this.showAll}>ALL</li>)
        }
        
        {
          active === 'doit'
            ? (<li onClick={this.filterdoit} className="active">Do it!</li>)
            : (<li onClick={this.filterdoit}>Do it!</li>)
        }
        
        {
          active === 'complete'
            ? (<li onClick={this.filterComplete} className="active">DONE!</li>)
            : (<li onClick={this.filterComplete}>DONE!</li>)
        }
      </ul>
    );
  }
}

export default Filter;