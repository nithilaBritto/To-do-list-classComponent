import React, { Component } from 'react'

export class Search extends Component {
    
  render() {
    return (
      <div>
        <div className="searchBar">
            <input type="search" className='searchBox' placeholder='Search' onChange={(e)=>this.props.onSearch(e.target.value)}/>
        </div>   
      </div>
    )
  }
}

export default Search