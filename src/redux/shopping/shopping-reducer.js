import * as  actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "This is the COOLEST Cube Ever",
            description:
                "This cube will keep you busy the entire day and it is very fun to play with",
            price: 15.0,
            image:
                "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 2,
            title: "Large Coffee Cup",
            description:
                "Get a big cup of coffee every morning before the day starts",
            price: 20.0,
            image:
                "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 3,
            title: "Books That CHANGED My Life",
            description:
                "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
            price: 150.0,
            image:
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        },
    ],  // id, title, description, price, img
    cart: [], // id, title, description, price, img, qty
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {

        case actionTypes.ADD_TO_CART:
            // get the items data from the products
            const item = state.products.find(item => item.id === payload.id);
            // check if the Iten is in cart already
            const inCart = state.cart.find(item => item.id === payload.id ? true : false);
            return {
                ...state,
                cart: inCart
                    ? state.cart.map(item =>
                        item.id === payload.id
                            ? {
                                ...item,
                                qty: item.qty + 1
                            }
                            : item)
                    : [...state.cart,
                    {
                        ...item,
                        qty: 1
                    }],
            };

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id),
            };

        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === payload.id
                    ? {
                        ...item,
                        qty: +payload.qty
                    }
                    : item
                )
            };

        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: payload
            };

        default:
            return state;
    }
}

export default shopReducer;