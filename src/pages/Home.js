import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './Home.css';
import { useNavigate } from 'react-router-dom';




// function omg(arr) {
//     const index = Math.floor(Math.random() * arr.length);
//     return index;
// }

function Home() {
    const [cardlist, setCardList] = useState([]);
    const navigate = useNavigate()
    
    function randomCard() {
        const index = Math.floor(Math.random() * cardlist.length);
        const id = cardlist[index].id;
        navigate(`/cards/${id}`)
    }  

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
            const results = res.data;
            setCardList(results.data);
            console.log(cardlist);
        }
        fetchData();
    }, [])

    return (
        <div className='home'>
            <h1>Welcome to the Yu-Gi-Oh Database</h1>
            <p>Choose Option</p>
            <div className="options">
                <ul className='list-container'>
                    <a href='/allcards'> <li className='li1'>Show All Cards</li></a>
                    <a href='/gethand'> <li className='li2' >Sample Hand</li></a>
                    <a href ='' onClick={randomCard}> <li className='li3'>Random Card</li></a>
                </ul>
               
            </div>
        </div>
  )
}

export default Home;


  // function getId() {
    //     console.log(cardlist.length);
    //     const index = Math.floor(Math.random * cardlist.length);
    //     console.log(index);
    //     if (cardlist[3].id === undefined) {
    //         return;
    //     }
    //     else {
    //         return cardlist[2].id;
    //     }
//}
    // const getId = () => `${cardlist[Math.floor(Math.random * cardlist.length)].id}`;