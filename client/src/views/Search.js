import React from 'react';

export default class Search extends React.Component {

  render() {
    return(
    	<section className="search-container">
    		<input type="search" className="form-control" placeholder="Search" onChange={this.props.handleSearchChange} />
    	</section>
    );
  }

}