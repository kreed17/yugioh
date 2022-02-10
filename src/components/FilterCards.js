import React from 'react';
import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import './FilterCards.css'

function FilterCards({filterResults, handleReset, refresh}) {
    function handleChange(e) {
        const category = e.target.value;
        filterResults(category.toLowerCase())
        // console.log(e.target.value)
        refresh();
    }
    function handleResetBtn() {
        handleReset();
        document.getElementById("card").value = 'None';
        refresh();
        
    }

    return (
    <div>
            <div className='filter-container'>
                <p>Sort</p>
                <select onChange={handleChange} name="card" id="card">
                    <option value="None">None</option>
                    <option value="ATK">ATK</option>
                    <option value="DEF">DEF</option>
                    <option value="Level">Level</option>
                    <option value="Name">Name</option>
                </select>
                <IconButton onClick= {handleResetBtn}>
                    <RefreshIcon htmlColor='#ffc100 '/>
                </IconButton>
            </div>
            
  </div>)
}

export default FilterCards;
