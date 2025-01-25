const getUser = () => {
    const currentUser = sessionStorage.getItem("userId");
    if(currentUser){
        return currentUser;
    }else{
        const newUser = 'user-'+new Date().getTime();
        sessionStorage.setItem('userId', newUser);
        return newUser;
    }
}

const getDataKey = () => {
    const userId = getUser();
    return '/user/carts/'+userId;
}

const getDataBaseCart = () => {
    const dataKey = getDataKey();
    const carts = localStorage.getItem(dataKey) || '{}';
    return JSON.parse(carts);
}

const addToDataBase = (id, count) => {
    const currentCart = getDataBaseCart();
    currentCart[id] = count;
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const placedOrder = () => {
    localStorage.setItem(getDataKey(), JSON.stringify({}));
}


export {addToDataBase, getDataBaseCart, placedOrder};