import React from 'react';

type props = {
    setSearchTerm : ( term  : string) => void,
    searchTerm : string
}
    
const Search = ({setSearchTerm, searchTerm}: props) => {

    return(
        <div className='ui grid middle aligned'>
            <div className='four wide column'></div>
            <div className='eight wide column'>
                <div className="ui fluid icon input">
                    <input 
                        placeholder="Search..."
                        value = {searchTerm}
                        onChange = {(e)=> setSearchTerm(e.target.value)}
                    />
                    <i className="inverted circular search link icon"></i>
                </div>
            </div>
            <div className='four wide column'></div>
        </div>
    )
}

export default Search;