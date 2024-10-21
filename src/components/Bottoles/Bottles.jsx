import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottole.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    return (
        <div className="bottole-layout">
            {
                bottles.map(bottole => <Bottle key={bottole.id} bottole={bottole}></Bottle>)
            }
        </div>
    );
};

export default Bottles;