import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    // purches bottle
    const [purches, setPurches] = useState([]);

    useEffect(() => {
        fetch('bottole.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    const handlerPurches = (bottle) => {
        const newBottle = [...purches, bottle];
        setPurches(newBottle);
    }

    return (
        <div>
            <h4>Cart: {purches.length}</h4>
            <div className="bottole-layout">
                {
                    bottles.map(bottole => <Bottle key={bottole.id} handlerPurches={handlerPurches} bottole={bottole}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;