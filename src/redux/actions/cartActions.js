export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
export const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";

export const addToCart = (id, amount) => {
    return {
        type:ADD_TO_CART,
        payLoad:{
            id:id,
            amount:amount,
        },
    }
}

export const removeFromCart = id => {
    return {
        type:REMOVE_FROM_CART,
        payLoad:id,
    }
}

export const increaseCartItem = cartId => {
    return {
        type:INCREASE_CART_ITEM,
        payLoad:cartId,
    }
}

export const decreaseCartItem = cartId => {
    return {
        type:DECREASE_CART_ITEM,
        payLoad:cartId,
    }
}