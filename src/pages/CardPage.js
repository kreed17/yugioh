import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CardPage.css'

function CardPage({ img }) {
    const [monster, setMonster] = useState('yo');
    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
       async function fetchCard() {
           const results = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
               .then(res => {
                   setMonster(res.data.data[0]);
                   setLoading(false);
               })         
       }
        fetchCard();
    }, [])


    console.log(monster);
    return isLoading ? <h1>Loading</h1> :
    (
        <div className='card-page'>
            <h1>{monster.name}</h1>
            <div className="card-info">
                <div className='card-figure'>
                    <img src={monster.card_images[0].image_url} alt="" />
                </div>
                <div className="card-description">
                    <p><strong>Description:</strong> <span>{monster.desc} </span></p>
                    <p><strong>Attack:</strong> <span>{monster.atk == undefined ? 'N/A' : monster.atk } </span></p>
                    <p><strong>Defense:</strong> <span>{monster.def == undefined ? 'N/A' : monster.def } </span> </p>
                    <p><strong>Level:</strong> <span>{monster.level == undefined ? 'N/A' : monster.level } </span></p>
                    <p><strong>Type:</strong> <span>{monster.type == undefined ? 'N/A' : monster.type } </span></p>
                    <p></p>
                </div>        
            </div>
           
        </div>
        
    )
}

export default CardPage;
