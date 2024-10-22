const getCartThing = () => {
    const gettingItem = localStorage.getItem('cart');
    if(gettingItem){
        return JSON.parse(gettingItem);
    }
    return [];
}

// store to local stroge

const storeToLS = cart =>{
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart',cartString);
};

// save
const addToLS = id =>{
    const cart = getCartThing()
    cart.push(id);
    storeToLS(cart);
}