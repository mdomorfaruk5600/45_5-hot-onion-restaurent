const GET_FOOD = "GET_FOOD";
const FILTER_CATEGORY_FOOD = "FILTER_MENU_FOOD";

const getFood = (foodId) => {
    return {
        type:GET_FOOD,
        payLoad:foodId,
    }
}

const filterCategoryFood = (menuCtegory) => {
    return {
        type:FILTER_CATEGORY_FOOD,
        payLoad:menuCtegory,
    }
}

export {GET_FOOD, FILTER_CATEGORY_FOOD, getFood, filterCategoryFood};