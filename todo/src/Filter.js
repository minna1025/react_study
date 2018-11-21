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
            ? (<li onClick={this.showAll} className="active">다보시오</li>)
            : (<li onClick={this.showAll}>다보시오</li>)
        }
        
        {
          active === 'doit'
            ? (<li onClick={this.filterdoit} className="active">해라!!!!!</li>)
            : (<li onClick={this.filterdoit}>해라!!!!!</li>)
        }
        
        {
          active === 'complete'
            ? (<li onClick={this.filterComplete} className="active">다함?!?!!</li>)
            : (<li onClick={this.filterComplete}>다함?!?!!</li>)
        }
      </ul>
    );
  }
}

export default Filter;