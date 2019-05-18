
let InisialState = {
    Price: null,
    PriceDev:null,
    minPrice:15,
    maxPrice:30,
    diveleryPrice:5
}


export let OrderPriceAction = (Price) => {
    return {
        type: ORDER_PRICE,
        Price
    }

}

export let OrderPriceActionDev = (Price) => {
    return {
        type: ORDER_PRICE_DEV,
        Price
    }

}

const ORDER_PRICE = 'ORDER_PRICE'
const ORDER_PRICE_DEV = 'ORDER_PRICE_DEV'


let OrderPrice = (state = InisialState, action) => {
    switch (action.type) {
        case ORDER_PRICE: return {
            ...state,
            Price: action.Price,
            PriceDev:action.Price
        }
        case ORDER_PRICE_DEV: 
        let price = Math.round((action.Price+state.diveleryPrice)*100)/100;
        return {
            ...state,
            Price: action.Price,
            PriceDev:price
        }
        default: return state

    }
}

export default OrderPrice 