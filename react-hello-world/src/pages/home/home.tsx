import { StoreReducer } from '../../reducers/store-reducer.types';
import { useEffect, useReducer } from 'react';
import { storeReducer } from '../../reducers/store-reducer';
import { storeData } from '../../utils/storage';
import Categories from '../../components/categories/Categories';
import ProductsList from '../../components/products-list/ProductsList';
import WishList from '../../components/wish-list/WishList';
import AddProduct from '../../components/add-product/AddProduct';
import Header from '../../components/header/Header';
import CartProvider from '../../providers/cart-provider';
import { Navigate, Route, Routes, useNavigate } from 'react-router';

const Home = () => {
    const [state, dispatch] = useReducer(storeReducer, { isInitialized: false, productList: [], wishList: [] });
    const navigate = useNavigate();
    useEffect(() => {
        if (!state.isInitialized) {
            dispatch({ type: StoreReducer.EActionTypes.INIT });
        }
    }, []);

    useEffect(() => {
        if (state.isInitialized) {
            storeData(state.productList, 'products-list');
        }
    }, [state.productList, state.isInitialized]);

    useEffect(() => {
        if (state.isInitialized) {
            storeData(state.wishList, 'wish-list');
        }
    }, [state.wishList, state.isInitialized]);

    const handleAddProduct = (product: Store.IProduct) => {
        dispatch({ type: StoreReducer.EActionTypes.ADD_PRODUCT, payload: { product } })
        navigate("/add");
    }
    return (
        <CartProvider>
            <Header />
            <Routes>
                <Route index element={<Navigate to="categories" />} />
                <Route path="categories" element={<Categories />} />
                <Route path="wish" element={
                    <WishList
                        wishList={state.wishList}
                        productList={state.productList}
                        onRemove={(id) => dispatch({ type: StoreReducer.EActionTypes.TOGGLE_WISHLIST, payload: { id } })}
                    />} />
                <Route path="/add" element={<AddProduct onAdd={handleAddProduct} />} />
                <Route path="/list" element={
                    <ProductsList
                        data={state.productList}
                        wishList={state.wishList}
                        onWish={(id) => dispatch({ type: StoreReducer.EActionTypes.TOGGLE_WISHLIST, payload: { id } })}
                        onDelete={(id) => dispatch({ type: StoreReducer.EActionTypes.DELETE_PRODUCT, payload: { id } })}
                    />}
                />
            </Routes>
        </CartProvider>
    )
}
export default Home;