import { FILTER_CATEGORY_FOOD, GET_FOOD } from "../actions/foodActions";

const initialFoodState = {
    foods:[
        {
            id: 1,
            name: "Classic Margherita Pizza",
            category:"breakfast",
            price: 23.9,
            description:"This homemade marinara sauce is my favorite. It’s simple, sweet, and strikes a perfect balance with the other ingredients. But use your favorite.",
            image: "https://cdn.dummyjson.com/recipe-images/1.webp"
          },
          {
            id: 2,
            name: "Vegetarian Stir-Fry",
            category:"breakfast",
            price: 9.99,
            description:"Easy Vegetable Stir Fry is a mixture of colorful vegetables sautéed in a sweet and savory sauce that makes for a simple weeknight meal! Less than 30 minutes to make from start to finish!Quick and simple recipe that can be made to your liking! If you love stir fry as much as we do try this Honey Garlic Chicken Stir Fry, or Slow Cooker Cashew Beef and Broccoli Stir Fry.",
            image: "https://cdn.dummyjson.com/recipe-images/2.webp"
          },
          {
            id: 3,
            name: "Chocolate Chip Cookies",
            category:"breakfast",
            price: 5.06,
            description:"A chocolate chip cookie is a sweet baked treat that is recognized by its butter flavor and the inclusion of chocolate chips. Some variations can include nuts, oatmeal or raisins as well. Commercially available formats of chocolate chips cookies include: Fresh.",
            image: "https://cdn.dummyjson.com/recipe-images/3.webp"
          },
          {
            id: 4,
            name: "Chicken Alfredo Pasta",
            category:"breakfast",
            price: 12.09,
            description:"Fettuccine pasta is a long, strand-like pasta that is often served al dente with a creamy, dairy-based sauce, such as the popular Fettuccine Alfredo. It works well with protein-based meals where chicken or another meat is a featured ingredient. Fettuccine originated and popular in Roman and Tuscan cuisine.",
            image: "https://cdn.dummyjson.com/recipe-images/4.webp"
          },
          {
            id: 5,
            name: "Mango Salsa Chicken",
            category:"breakfast",
            price:34.87,
            description:"The beauty of mango salsa is that it tastes great with just about anything you're eating this summer. While you can (and should!) pair it with tortilla chips and margaritas, it's just as tasty served atop fish tacos, grilled salmon, grilled chicken, shrimp kebabs, and burrito bowls. Be the first to leave a review!",
            image: "https://cdn.dummyjson.com/recipe-images/5.webp"
          },
          {
            id: 6,
            name: "Quinoa Salad with Avocado",
            category:"breakfast",
            price: 55.60,
            description:"Quinoa is rich in plant-based protein, dietary fiber, magnesium, phosphorus, iron, and zinc. It is a complete protein source, making it beneficial for vegetarians and vegans. It also supports digestive health, provides essential minerals, and helps regulate blood sugar levels",
            image: "https://cdn.dummyjson.com/recipe-images/6.webp"
          },
          {
            id: 7,
            name: "Tomato Basil Bruschetta",
            category:"lunch",
            price: 28.00,
            description:"It’s peak tomato season, which means it’s also bruschetta season! By bruschetta, I mean the Americanized version of authentic Italian bruschetta, featuring ripe red tomatoes, basil and garlic on golden, toasted French bread.",
            image: "https://cdn.dummyjson.com/recipe-images/7.webp"
          },
          {
            id: 8,
            name: "Beef and Broccoli Stir-Fry",
            category:"lunch",
            price: 9.99,
            description:"fter moving out of the dorms in college, I found an apartment to share with three others. My job was to cook, and as long as what I put out on the dinner table was better than instant ramen, I didn’t have to clean the kitchen or vacuum. A mighty fine trade of labor, if you ask me! ",
            image: "https://cdn.dummyjson.com/recipe-images/8.webp"
          },
          {
            id: 9,
            name: "Caprese Salad",
            category:"lunch",
            price: 12.87,
            description:"Caprese salad (Italian: insalata caprese, Italian: [insaˈlaːta kaˈpreːze; -eːse], or simply caprese) is an Italian salad, made of sliced fresh mozzarella, tomatoes, and sweet basil, seasoned with salt, and olive oil. It is usually arranged on a plate in restaurant practice.",
            image: "https://cdn.dummyjson.com/recipe-images/9.webp"
          },
          {
            id: 10,
            name: "Shrimp Scampi Pasta",
            category:"lunch",
            price: 6.65,
            description:"Scampi is an Italian word which migrated all over Europe. In most countries, especially Italy, scampi means the peeled tail of pretty much any kind of prawn but in the UK it refers to the meat of just one special prawn: the langoustine.",
            image: "https://cdn.dummyjson.com/recipe-images/10.webp"
          },
          {
            id: 11,
            name: "Chicken Biryani",
            category:"lunch",
            price: 67.00,
            description:"A dish originated from persia and now bengal's favourite. Made out of true love in desi ghee, country chicken and the purest zafran. marinated in our secret biryani masala and dum cooked slowly in wood fire with a combination of aromatic rice, chicken, spices and bengal's famous chandramukhi potato",
            image: "https://cdn.dummyjson.com/recipe-images/11.webp"
          },
          {
            id: 12,
            name: "Chicken Karahi",
            category:"lunch",
            price: 90.99,
            description:"It is noted for its spicy taste and is notable in South Asian Cuisine. The dish is prepared in a karahi (a type of wok) and can take between 30 and 50 minutes to prepare and cook the dish. Ginger, garlic, tomatoes, green chilli and coriander are key to the flavor of the dish.",
            image: "https://cdn.dummyjson.com/recipe-images/12.webp"
          },
          {
            id: 13,
            name: "Aloo Keema",
            category:"dinner",
            price: 18.76,
            description:"A very popular snack food in India is a paper plate of Keema (curried minced lamb) with Paratha bread. The curry often includes potato and peas, but sometimes is actually more gravy than anything else.",
            image: "https://cdn.dummyjson.com/recipe-images/13.webp"
          },
          {
            id: 14,
            name: "Chapli Kebabs",
            category:"dinner",
            price: 15.67,
            description:"Chapli kabab are thin ground beef patties made with aromatics and spices. Unlike your usual grilled kebabs, Chapli Kabab are fried so they're browned on the outside and tender on the inside.",
            image: "https://cdn.dummyjson.com/recipe-images/14.webp"
          },
          {
            id: 15,
            name: "Saag (Spinach) with Makki di Roti",
            category:"dinner",
            price: 17.00,
            description:"Sarson ka saag is luscious green gravy made out of mustard seeds, cooked with masala and seasoned in oil. It is accompanied with corn bread. Makki di roti is made with maize flour, a little maida, oil and salt. All these ingredients are kneaded sprinkling water, flattened with the palm and rolled into a thin roti",
            image: "https://cdn.dummyjson.com/recipe-images/15.webp"
          },
          {
            id: 16,
            name: "Japanese Ramen Soup",
            category:"dinner",
            price: 88.98,
            description:"Simply put, ramen is a Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg.",
            image: "https://cdn.dummyjson.com/recipe-images/16.webp"
          },
          {
            id: 17,
            name: "Moroccan Chickpea Tagine",
            category:"dinner",
            price: 56.77,
            description:"The tagine's history is intertwined with Morocco's cultural diversity and rich culinary traditions, making it an integral part of the nation's identity. Traditional Moroccan tagines are made from clay or ceramic, often adorned with vibrant colors and intricate designs.",
            image: "https://cdn.dummyjson.com/recipe-images/17.webp"
          },
          {
            id: 18,
            name: "Korean Bibimbap",
            category:"dinner",
            price: 88.45,
            description:"The term bibim means mixing and bap is cooked rice. It is served as a bowl of warm white rice topped with namul (sautéed or blanched seasoned vegetables) and gochujang (chili pepper paste).",
            image: "https://cdn.dummyjson.com/recipe-images/18.webp"
          },
    ],
    categoriesFood:[],
    selectedCategory:"lunch",
    food:{},
};

const foodReducer = (state=initialFoodState, action) => {
  switch(action.type){
    case GET_FOOD:
        const food = state.foods.find(item => item.id === Number(action.payLoad));
        return {...state, food:food};
    case FILTER_CATEGORY_FOOD:
        const category = action.payLoad.toLowerCase();
        return {
          ...state,
          selectedCategory: category,
        };
    default:
        return state;
  }
}

export default foodReducer;