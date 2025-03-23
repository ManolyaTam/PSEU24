import { useContext } from 'react';
import './header.css';
import { CartContext } from '../../providers/cart-provider';
import { useNavigate, useLocation } from 'react-router';

const Header = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className='header'>
      <h1>This is header</h1>
      <nav>
        <ul className="main-nav">
          <li
            className={location.pathname === "/home/categories" ? 'active' : ''}
            onClick={() => {
              navigate("/home/categories")
            }}
          >
            Categories
          </li>
          <li
            className={location.pathname === "/home/list" ? 'active' : ''}
            onClick={() => {
              navigate("/home/list")
            }}
          >
            Products List
          </li>
          <li
            className={location.pathname === "/home/wish" ? 'active' : ''}
            onClick={() => {
              navigate("/home/wish")
            }}
          >
            Wish List
          </li>
          <li
            className={location.pathname === "/home/add" ? 'active' : ''}
            onClick={() => {
              navigate("/home/add")
            }}
          >
            Add Product
          </li>
        </ul>
      </nav>
      <span className='cart'>🛒<sup>{cart.length}</sup></span>
    </header>
  )
};

export default Header;