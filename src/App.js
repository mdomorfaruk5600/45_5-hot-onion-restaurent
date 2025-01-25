import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuDetail from './components/MenuDetail/MenuDetail';
import Auth from './components/Auth/Auth';
import UserProvider from './Helper/UserProvider/UserProvider';
import RequireAuth from './Helper/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import SecondHeader from './components/SecondHeader/SecondHeader';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import FoodsProvider from './Helper/FoodsProvider/FoodsProvider';
import CartProvider from './Helper/CartProvider/CartProvider';
import ShipmentProvider from './Helper/ShipmentProvider/ShipmentProvider';

function App() {
  return (
    <FoodsProvider>
      <CartProvider>
        <ShipmentProvider>
          <UserProvider>
              <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/test/test2' element={<Home />} />
                <Route path='/menu/:foodId' element={<><SecondHeader /><MenuDetail /></>} />
                <Route path='/shipment' element={
                  <RequireAuth>
                    <SecondHeader />
                    <Shipment />
                  </RequireAuth>
                } />
                <Route path='/order-placed' element={
                  <RequireAuth>
                    <SecondHeader/>
                    <OrderPlaced />
                  </RequireAuth>
                } />
                <Route path='/login' element={<Auth />} />
                <Route path='/signup' element={<Auth />} />
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </ShipmentProvider>
      </CartProvider>
    </FoodsProvider>
  );
}

export default App;
