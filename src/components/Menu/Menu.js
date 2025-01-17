import React, { useEffect } from 'react';
import './Menu.css';
import MenuItem from '../MenuItem/MenuItem';
import { filterCategoryFood } from '../../redux/actions/foodActions';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = (props) => {
  const {category, foods, carts} = props;
  const location = useLocation();
  const naviage = useNavigate();
  const want = location.state?.want;
  useEffect(()=>{
    if(want){
      props.filterCategoryFood(want);
    }
  }, []);
  const handleProceedToCheckout = () => {
    naviage('/shipment')
  }
    return (
        <div className='container menu'>
            <div className='menu-categories'>
                <ul>
                    <li><button className={category === 'breakfast' ? 'active':''} onClick={()=>props.filterCategoryFood('breakfast')}>Breakfast</button></li>
                    <li><button className={category === 'lunch' ? 'active':''} onClick={()=>props.filterCategoryFood('lunch')}>Lunch</button></li>
                    <li><button className={category === 'dinner' ? 'active':''} onClick={()=>props.filterCategoryFood('dinner')}>Dinner</button></li>
                </ul>
            </div>
            <div className='menu-items'>
                { 
                  foods.map(food => <MenuItem key={food.id} food={food} />)
                }
            </div>
            <div className='checkout-food'>
                <button onClick={handleProceedToCheckout} className={'checkout-button '+(carts.length <= 0 ? 'disabled':'')} disabled={carts.length <= 0 ? 'disabled':''}>Checkout Your Food</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {

  return {
    foods:state.foodReducer.foods.filter(food => food.category === state.foodReducer.selectedCategory),
    category:state.foodReducer.selectedCategory,
    carts:state.cartReducer.carts,
  }
}

const mapDispatchToProps = {
  filterCategoryFood:filterCategoryFood,
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);