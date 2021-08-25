import React from 'react';
// import Imagenes from '../assets/Imagenes';
import '../estilos.css';
import Item from './Item';
import ItemDetail from './ItemDetail';
import {productos} from '../assets/arrays';
import { NavLink} from 'react-router-dom';

let arrayProducto = [];


class ListItems extends React.Component{
    constructor(props){
        super(props);
        this.state={array: productos, porductoInfo: arrayProducto};
    };
    
    cargarCategoria(arrayCategoria){
        const divCargando =document.querySelector('#cargandoCategorias');
        let contenedorItemDetalle=document.querySelector('.mainItemDetalle');
        contenedorItemDetalle.style.display='none';
        const promesa = ()=>
        new Promise ((resolve)=>{
            this.setState({array:[]});
            divCargando.style.display= 'block';
            divCargando.innerHTML= 'Cargando.';
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando..';
            },500)
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando...';
            },1500)
            setTimeout(()=>{
                resolve(arrayCategoria);
                divCargando.style.display= 'none';
            }, 2000);
        })
        promesa().then((result)=>{
            let contenedorItems=document.querySelector('.contenedorItems');
            contenedorItems.style.display='flex';
            this.setState({array:result})
        })
    }
    
    abrirDetalleProducto(id){
        arrayProducto= [];
        arrayProducto.push(productos[`${id-1}`]);
        const divCargando = document.querySelector('#cargandoCategorias');
        let contenedorItems=document.querySelector('.contenedorItems');
        contenedorItems.style.display='none';
        
        const promesa = ()=>
        new Promise ((resolve)=>{
            this.setState({porductoInfo:[]});
            divCargando.style.display= 'block';
            divCargando.innerHTML= 'Cargando producto en 3...';
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando producto en 2..';
            },500)
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando producto en 1.';
            },1500)
            setTimeout(()=>{
                resolve(arrayProducto);
                divCargando.style.display= 'none';
            }, 2000);
        })
        promesa().then((result)=>{
            let contenedorItemDetalle=document.querySelector('.mainItemDetalle');
            contenedorItemDetalle.style.display='block';
            this.setState({porductoInfo:result})
        })
    }
    cerrarItem(){
        const divCargando = document.querySelector('#cargandoCategorias');
        let contenedorItemDetalle=document.querySelector('.mainItemDetalle');
        let contenedorItems=document.querySelector('.contenedorItems');
        contenedorItemDetalle.style.display='none';
        divCargando.style.display= 'block';
        divCargando.innerHTML= 'Cargando.';
        setTimeout(()=>{
            divCargando.innerHTML= 'Cargando..';
        },500)
        setTimeout(()=>{
            divCargando.innerHTML= 'Cargando...';
        },1500)
        setTimeout(()=>{
            divCargando.style.display= 'none';
            contenedorItems.style.display='flex';
        }, 2000);
    }
    filtrarArray(category){
        let arrayFiltrado = productos.filter(producto => producto.categoria === category);
        return arrayFiltrado;
     }

    render(){
        return (
            <div className="contenedorCategorias" key='contenedorCategorias'>
                <div className="listadoCategorias">
                    <div className="btnCategoria" id='BtnTodos' onClick={this.cargarCategoria.bind(this,productos)}>
                        <NavLink exact activeClassName='categoriaActiva' to='/categorias/'>Todos los Productos</NavLink>
                    </div>
                    <div className="btnCategoria" id='BtnBilleteras' onClick={this.cargarCategoria.bind(this,this.filtrarArray('billeteras'))}>
                        <NavLink activeClassName='categoriaActiva' to='/categorias/billeteras'>Billeteras</NavLink>
                    </div>
                    <div className="btnCategoria" id='BtnCinturones' onClick={this.cargarCategoria.bind(this,this.filtrarArray('cinturones'))}>
                        <NavLink activeClassName='categoriaActiva' to='/categorias/cinturones'>Cintrunes</NavLink>
                    </div>
                </div>
                <div id='cargandoCategorias'></div>
                <div className='contenedorItems'>
                    {this.state.array.map(a=>(
                        <Item 
                        img={a.imgURL} 
                        alt={a.alt} 
                        precio={a.precio} 
                        nombre={a.nombre} 
                        stock={a.stock} 
                        id={a.id} 
                        categoria={a.categoria}
                        funcion={this.abrirDetalleProducto.bind(this,a.id)}></Item>
                    ))
                    }
                </div>
                <div className='mainItemDetalle'>
                       {this.state.porductoInfo.map(produ=>(
                            <ItemDetail
                            img={produ.imgURL}
                            alt={produ.alt}
                            nombre={produ.nombre}
                            precio={produ.precio}
                            id={produ.id}
                            info={produ.informacion}
                            funcion={this.cerrarItem.bind(this)}
                            ></ItemDetail>
                       ))}
                </div>

            </div>
        )
    }
}

export default ListItems;