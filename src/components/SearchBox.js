import React from "react";

const SearchBox = ({SearchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 b--green bg-lightest-blue ba' type="search" placeholder="search robots" onChange={SearchChange}/>
        </div>
    )
}

export default SearchBox;