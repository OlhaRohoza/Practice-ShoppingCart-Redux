import * as actionTypes from './shopping-types';

export function addToCart(itemID) {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    };
}

export function removeFromCart(itemID) {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    };
}

export function adjustQty(itemID, value) {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value,
        }
    };
}

export function loadCurrentItem(item) {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    };
};