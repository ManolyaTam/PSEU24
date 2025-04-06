import { useContext } from 'react';
import { EPages } from '../../enums';
import './header.css';
import { CartContext } from '../../providers/cart-provider';
import { NavLink } from 'react-router';


const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className='header'>
      <h1>Sarah Express</h1>
      <nav>
        <ul className="main-nav">
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={`/${EPages.CATEGORIES}`}>Categories</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={`/${EPages.LIST}`}>Products List</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={`/${EPages.WISH}`}>Wish List</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={`/${EPages.ADD}`}>Add Product</NavLink></li>
        </ul>
      </nav>
      <NavLink className='cart' to={`/${EPages.CART}`}>🛒<sup>{cart.length}</sup></NavLink>
    </header>
  )
};

export default Header;