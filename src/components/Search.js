import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

function Search({searchQuery}) {
    const [query, setQuery] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        searchQuery(query);
        setQuery('');
}
    return (
        <div className='search'>
            <form onSubmit={handleSubmit} action="" method="get">
                <p>Search</p>
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder='Card Name' />
                <IconButton onClick={handleSubmit}> 
                    <SearchIcon  htmlColor='#ffc100'/>
                </IconButton>
                
            </form>

        </div>
    )
}

export default Search;
