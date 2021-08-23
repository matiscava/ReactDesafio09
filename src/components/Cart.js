import React from 'react';
import ItemCarrito from './ItemCarrito';

let Carrito = [];
let carritoCargado = localStorage.getItem('productosCarrito');
console.log(JSON.parse(carritoCargado))
Carrito.push(JSON.parse(carritoCargado));
console.log(Carrito)


const Cart = () => {
    return(
        <div>
            <h3>Tu Carrito:</h3>
            <div className='ContenedorCarrito'>
                {Carrito[0].map(producto=>(
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