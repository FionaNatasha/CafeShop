
let inisialState = {
    Menu: [{
        dish: 'Кофе',
        think: 1,
        price: 3,
        id: 1
    },
    {
        dish: 'Омлет по-деревенски',
        think: 1,
        price: 4.9,
        id: 2
    },
    {
        dish: 'Сырники вегатериански',
        think: 1,
        price: 6.37,
        id: 3
    },
    {
        dish: 'Облепиховый чай',
        think: 1,
        price: 3,
        id: 4
    },
    {
        dish: 'Пирог лимонный',
        think: 1,
        price: 8,
        id: 5
    }
    ],
}


//constants
const INCREMENT = 'MAIN_LIST/INCREMENT'
const DECREMENT = 'MAIN_LIST/DECREMENT'
const DELETE_DISH = 'MAIN_LIST/DELETE_DISH'


//actions
export let increment = (id) => {
    return {
        type: INCREMENT,
        id
    }
}

export let decrement = (id) => {
    return {
        type: DECREMENT,
        id
    }
}

export let deleteDish = (id) => {
    return {
        type: DELETE_DISH,
        id
    }

}



let MainList = (state = inisialState, action) => {
    let copyState = { ...state }
    switch (action.type) {
        case INCREMENT: return {
            Menu: copyState.Menu.map((selection) => {
                if (selection.id === action.id) {
                    const think = selection.think + 1
                    const price = Math.round(selection.price / selection.think * 100) * think / 100
                    return {
                        dish: selection.dish,
                        think: think,
                        price: price,
                        id: selection.id
                    }
                }
                return selection
            })
        }

        case DECREMENT: return {
            Menu: copyState.Menu.map((selection) => {
                if (selection.id === action.id) {
                    const think = selection.think - 1
                    const price = Math.round(selection.price / selection.think * 100) * think / 100
                    return {
                        dish: selection.dish,
                        think: think,
                        price: price,
                        id: selection.id
                    }
                }
                return selection
            })
        }

        case DELETE_DISH: return {
            Menu: copyState.Menu.filter((selection) => {

                if (selection.id !== action.id) {
                    return (selection)

                }
            })
        }


        default: return { ...state }
    }
}



export default MainList