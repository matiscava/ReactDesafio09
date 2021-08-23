import React from 'react';


const ItemCarrito = ({img,alt,nombre,precio,cantidad,id,categoria})=>{
        return (
            <div className='contenedorItemCarrito' id={'tarjetaItemCarrito-'+id} key={'tarjetaItemCarrito-'+id}>
                <div className='contendorImgItemCarrito'>
                    <img className='ItemCarritoImg' src={img} alt={alt} />
                </div>
                <div className='contendorItemCarritoTexto'>
                    <p className='ItemCarrito'>{nombre}</p>
                    <p className='ItemCarritoCategoria'>{categoria}</p>
                    <p className='ItemCarritoCantidad'>Cantidad: {cantidad} </p>
                    <p className='ItemCarritoPrecio'>Precio por Unidad: $ {precio}</p>
                    <p className='ItemCarritoPrecio ItemCarritoPrecio-Total'>Total: $ {precio*cantidad}</p>

                </div>
            </div>
        );
    } 

export default ItemCarrito;