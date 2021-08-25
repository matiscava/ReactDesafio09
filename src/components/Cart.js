import React,{useContext} from 'react';
import ItemCarrito from './ItemCarrito';
import { CartContext } from "../context/cartContext";



const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const vaciarCart = () => {
        setCart([]);
    
    }
    return(
        <div>
            <h3>Tu Carrito:</h3>
            <div className='ContenedorCarrito'>
            {cart.length !==0 && <div className='ItemDetalleBtn ItemDetalleBtn--Volver' onClick={()=>vaciarCart()} >Vaciar Carrito</div>}
                {cart.length===0 ? <p>El Carrito está vacio</p> : 
                cart.map(producto=>(
                    <ItemCarrito 
                        img={producto.imgURL}
                        alt={producto.alt}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        cantidad={producto.cantidad}
                        id={producto.id}
                        categoria={producto.categoria}
                    />
                ))} 
            </div>
        </div>
    )
}

export default Cart;