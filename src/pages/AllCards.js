import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FilterCards from '../components/FilterCards';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import './AllCards.css';

function AllCards() {
    const [allCards, setAllCards] = useState([]);
    const [cards, setCards] = useState([]);
    const [load,setLoading] =useState(false)

    async function findQuery(input) {
        const queryResults = allCards.filter(card => {
            return card.name.toLowerCase().includes(input.toLowerCase())
        })
        setCards(queryResults)
    }

    function refresh() {
        setLoading(false);
        console.log('refreshed');
    }

    async function handleReset() {
        setCards(allCards);
        filterResults('name');
        refresh();        
    }

    async function filterResults(category) {
        console.log(category);
        if (category === 'name') {
            const filtered = cards.sort((card1, card2) => {
                return card2[category].toLowerCase() < card1[category].toLowerCase()? 1:-1
            })      
            setCards(filtered);
            refresh();
        }
        else {
            const filtered = cards.sort((card1, card2) => {
                if (card1[category] === undefined) {
                    card1[category] = -1;
                    return card2[category] - card1[category]
                }
                else if (card2[category] === undefined) {
                    card2[category] = -1;
                    return card2[category] - card1[category]
                }               
               return card2[category] - card1[category]
            })
            setCards(filtered);
            refresh();
        }       
    }

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            setAllCards(res.data.data);
            setCards(res.data.data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        setLoading(true);
        
    },[load])
   
    return (
        <div className='allcards-container'>
            <div className="search-filter">
                <div className='search-container'>
                    <Search searchQuery={findQuery} />
                </div>
                <div className='filter-container'>
                    <FilterCards 
                        filterResults={filterResults}
                        handleReset={handleReset}
                        refresh={refresh}
                    />
                </div> 
            </div>
            
            <div>
                <div className='cardlist'>
                <Pagination data={cards} reload={load} />               
                </div>
                
          </div>  
      </div>
  )
}

export default AllCards;
