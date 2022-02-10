import { useEffect, useState } from "react";
import axios from "axios";
import CardRow from "../components/CardRow";
import './SampleHand.css';



function SampleHand() {
    const [cards, setCards] = useState([]);
    const [hand, setHand] = useState([]);

    function getHand() {
        let newHand = [];
        for (let i = 0; i < 5; i++){
            const index = Math.floor(Math.random() * cards.length);
            let newCard = cards[index];
            newHand =[...newHand, newCard]
        }
        setHand(newHand);
    }
    console.log(hand);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
            setCards(res.data.data);
        }
        fetchData();
    }, [])

    return (
        <div className="sample-hand">
            <h1>Sample Hand</h1>
            <button onClick={getHand}>Get Hand</button>

            <div className="new-hand">
                
            {
                    hand.map(data => (
                        <a key={data.id} href={`/cards/${data.id}`}>

                            <CardRow
                                key={data.id}
                                cardImg={data.card_images[0].image_url}
                        />
                            </a>
            ))
            }              
            </div>

        </div>
  )
}

export default SampleHand;
