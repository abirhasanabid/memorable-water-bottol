import './bottle.css'

const Bottle = ({ bottole, handlerPurches }) => {
    const { name, price,img } = bottole;
    return (
        <div className="card">
            <h3>Name : {name}</h3>
            <img src={img} alt="" />
            <h3>Price : ${price}</h3>
            <button onClick={()=>handlerPurches(bottole)}>Perches</button>
        </div>
    );
};

export default Bottle;