import { useContext } from 'react';
import { EPages } from '../../enums';
import './header.css';
import { CartContext } from '../../providers/cart-provider';

interface IProps {
  productsCount: number;
  onNavigate: (page: EPages) => void;
  currentPage: string;
}
const Header = ({ onNavigate, currentPage }: IProps) => {
  const { cart } = useContext(CartContext);

  return (
    <header className='header'>
      <h1>This is header</h1>
      <nav>
        <ul className="main-nav">
          <li className={currentPage === EPages.CATEGORIES ? 'active' : ''} onClick={() => onNavigate(EPages.CATEGORIES)}>Categories</li>
          <li className={currentPage === EPages.LIST ? 'active' : ''} onClick={() => onNavigate(EPages.LIST)}>Products List</li>
          <li className={currentPage === EPages.WISH ? 'active' : ''} onClick={() => onNavigate(EPages.WISH)}>Wish List</li>
          <li className={currentPage === EPages.ADD ? 'active' : ''} onClick={() => onNavigate(EPages.ADD)}>Add Product</li>
        </ul>
      </nav>
      <span className='cart'>🛒<sup>{cart.length}</sup></span>
    </header>
  )
};

export default Header;