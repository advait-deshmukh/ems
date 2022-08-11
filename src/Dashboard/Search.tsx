import React,{useState} from 'react';

type props = {
    setSearchTerm : ( term  : string) => void,
    searchTerm : string
}
    
const Search = ({setSearchTerm, searchTerm}: props) => {

    return(
        <div>
            <div className="ui icon input right floated">
                <input 
                    placeholder="Search..."
                    value = {searchTerm}
                    onChange = {(e)=> setSearchTerm(e.target.value)}
                />
                <i className="inverted circular search link icon"></i>
            </div>
        </div>
    )
}

export default Search;