import React,{useState, useContext} from "react";
import {productos} from '../assets/arrays';
import {Link} from 'react-router-dom';
import { CartContext } from "../context/cartContext";

let ArrayCarrito = [];
let carritoCargado = localStorage.getItem('productosCarrito');
if(carritoCargado!=null){
    ArrayCarrito.push(JSON.parse(carritoCargado))
}
let apretado=false;



const ItemCount = ({id}) => {
    class AgregarItem {
        constructor(id,nombre,precio,img,alt,info,cantidad,categoria,marca,modelo){
            this.id=id;
            this.nombre=nombre;
            this.precio=precio;
            this.imgURL=img;
            this.alt=alt;
            this.informacion=info;
            this.cantidad=cantidad;
            this.categoria=categoria;
            this.marca=marca;
            this.modelo=modelo;
        };   
    };
    

    
    let productoContado = productos.find( producto => producto.id === id);
    

    const [numero, setNumero] = useState(1);
    const [nuevoStock,setNuevoStock]= useState(productoContado.stock);

    const sumarUno = () =>{
            if(numero<nuevoStock){
                setNumero(numero+1);    
            }
        }
    const restarUno = ()=>{
            if(numero>0){
                setNumero(numero-1);
            }
    }
    // const enviarCarrito = () =>{
    //     let agregarCarrito = [];
    //     stockNuevo= productoContado.stock - numero;
    //     setNuevoStock({...productos[id-1],stock:nuevoStock});
    //     agregarCarrito = new AgregarItem (
    //         id,
    //         productoContado.nombre,
    //         productoContado.precio,
    //         productoContado.imgURL,
    //         productoContado.alt,
    //         productoContado.informacion,
    //         numero,
    //         productoContado.categoria,
    //         productoContado.marca,
    //         productoContado.modelo
    //         );
    //         setNumero(1);
    //         ArrayCarrito.push(agregarCarrito);
    //         apretado=true;
    //         localStorage.setItem('productosCarrito',JSON.stringify(ArrayCarrito));
    //     }

    const cambiarStock = (contador) =>{
        setNuevoStock(nuevoStock-contador);
        if(nuevoStock-contador ===0){
            setNumero(0);
        }else{
            setNumero(1);
        }
    }
    const [cart, setCart] = useContext(CartContext);
    const repetido = () =>{
        let buscador = cart.find( producto => producto.id === id );
        if(buscador!==undefined){
            let cantidad = buscador.cantidad;
            borrarItem(buscador.id)
            addToCart(numero+cantidad);
        }else{
            addToCart(numero);
        }
        cambiarStock(numero);
        apretado=true;
    }
    const borrarItem = (id) =>{
        const arrayNuevo = cart.filter((producto) => producto.id !== id);
        setCart(arrayNuevo);
    }
    const addToCart = (contador)=>{
        const item = {
            id: id,
            nombre: productoContado.nombre,
            precio: productoContado.precio,
            imgURL: productoContado.imgURL,
            alt: productoContado.alt,
            informacion: productoContado.informacion,
            cantidad: contador,
            categoria: productoContado.categoria,
            marca: productoContado.marca,
            modelo: productoContado.modelo
        }
        setCart(carrito => [...carrito, item]);
    }
    return (
        <div className='contendorContadorItem'>
            <div className='contenedorNumero'>
                <p className='numeroItem'>{numero}</p>
                <div className='contendorSpan'>
                    <span className='spanStock IconoSocial-plus'onClick={()=>sumarUno()}></span>
                    <span className='spanStock IconoSocial-minus' onClick={()=>restarUno()}></span>
                </div>
            </div>
            <p className='numeroStock'>Stock: {nuevoStock}</p>
            <div className='ItemDetalleBtn ItemDetalleBtn--agregar' onClick={()=>repetido()}> Agregar al carrito</div>
            {apretado && <Link to='/cart' className='navLinkContador'><div className='ItemDetalleBtn' onClick={apretado=false} href='/cart'>Continuar con la compra</div></Link>}
        </div>
    );
     
}

export default ItemCount;