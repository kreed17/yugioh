import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardRow from './CardRow';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LastPageIcon from '@mui/icons-material/LastPage';
import './Pagination.css';
import { IconButton } from '@mui/material';


function Pagination({ data,reload}) {
    const [currPage, setCurrPage] = useState(1);
    const itemsPerPage = 30;
    const pageCount = Math.ceil(data.length / itemsPerPage);
    // console.log(pageCount);

    useEffect(() => {
        setCurrPage(1);      
    }, [reload]);

    function goToNextPage() {
        if (currPage !== pageCount) {
            const next = currPage + 1;
            setCurrPage(next);
        }
     }
   
     function goToPreviousPage() {
         if (currPage !== 1) {
            const prev = currPage - 1;
            setCurrPage(prev)
        }
     }
    function goToEnd() {
        setCurrPage(pageCount);
    }
    function goToStart() {
        setCurrPage(1);
    }
   
     function changePage(event) {
        // not yet implemented
     }
   
     const getPaginatedData =  () => {
         const startIndex = currPage * itemsPerPage - itemsPerPage;
         const endIndex = startIndex + itemsPerPage;
         return data.slice(startIndex,endIndex)
     };
   
     const getPaginationGroup = () => {
        // not yet implemented
     };
    
    return ( 
        <div>
            <div className='pagination-header'>
                <p className='items'>{data.length} Results</p>
                <div className="page-buttons">
                    <IconButton onClick ={goToStart}><FirstPageIcon htmlColor='#ffc100 '/></IconButton>
                    <IconButton onClick={goToPreviousPage}><ArrowBackIosNewIcon htmlColor='#ffc100 '/> </IconButton>
                    <IconButton onClick={goToNextPage}><ArrowForwardIosIcon htmlColor='#ffc100 '/></IconButton>
                    <IconButton onClick={goToEnd}><LastPageIcon htmlColor='#ffc100 '/></IconButton>
                   
            </div>
            </div>
             
            <div className='card-list'>
            {
                    getPaginatedData().map((data) => (
                       
                           <a key={data.id} href={`/cards/${data.id}`}>
                           <CardRow
                            key={data.id}
                            cardImg={data.card_images[0].image_url}
                                /> 
                           </a>
                ))
                }
            </div>     
            <div className="page-buttons">
            <IconButton onClick ={goToStart}><FirstPageIcon htmlColor='#ffc100 ' /></IconButton>
                    <IconButton onClick={goToPreviousPage}><ArrowBackIosNewIcon htmlColor='#ffc100 ' /> </IconButton>
                    <IconButton onClick={goToNextPage}><ArrowForwardIosIcon htmlColor='#ffc100 '/></IconButton>
                    <IconButton onClick={goToEnd}><LastPageIcon htmlColor='#ffc100 '/></IconButton>
            </div> 
            <div className=""></div>
        </div>
  )
}

export default Pagination;
