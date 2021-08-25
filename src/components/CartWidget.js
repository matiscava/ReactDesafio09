import React,{useContext} from 'react';
import '../estilos.css';
import '../Iconos3/style.css';
import {NavLink} from 'react-router-dom';
import {CartContext} from '../context/cartContext';



const CartWidget = () => { 
    const [cart, setCart] = useContext(CartContext);

    return(
        <div>
            <div className='headerContenedorSpan'>
                <NavLink activeClassName='navLinkActivo' to={'/cart'}>
                    <span className='NavBarSpan IconoSocial-shopping-cart'></span>
                    {cart.length !== 0 && <span className='spanItemCarrito'>{cart.length}</span>} 
                </NavLink>
            </div> 
        </div>
    )
}

export default CartWidget;

