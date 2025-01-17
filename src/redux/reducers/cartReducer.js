import { ADD_TO_CART, DECREASE_CART_ITEM, INCREASE_CART_ITEM, REMOVE_FROM_CART } from './../actions/cartActions';
const initialCartState =  {
    carts:[],
}

const cartReducer = (state = initialCartState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const isAlreadyAdded = state.carts.find(item => item.foodId === action.payLoad.id);
           let newCarts;
            if(isAlreadyAdded){
                const existingItem = {...isAlreadyAdded};
                existingItem.amount = existingItem.amount + action.payLoad.amount;
                const others = state.carts.filter(item => item.foodId !== existingItem.foodId);
                newCarts = [...others, existingItem];
            }else{
                const newItem = {
                    cartId:state.carts.length + 1,
                    foodId:action.payLoad.id,
                    amount:action.payLoad.amount,
                };
                newCarts = [...state.carts, newItem];
            }
            return {...state, carts:newCarts};
        case REMOVE_FROM_CART:
            return state;
        case INCREASE_CART_ITEM:
            const increaseItem = state.carts.find(item => item.foodId === action.payLoad);
            increaseItem.amount = increaseItem.amount + 1;
            const othersItem = state.carts.filter(item => item.foodId !== action.payLoad);
            return {...state, carts:[...othersItem, increaseItem]};
        case DECREASE_CART_ITEM:
            const decreaseItem = state.carts.find(item => item.foodId === action.payLoad);
            if(decreaseItem.amount > 1){
                decreaseItem.amount = decreaseItem.amount - 1;
            }
            const remaining = state.carts.filter(item => item.foodId !== action.payLoad);
            return {...state, carts:[...remaining, decreaseItem]};
        default:
            return state;
    }
}

export default cartReducer;