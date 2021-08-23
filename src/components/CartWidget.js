import React from 'react';
import '../estilos.css';
import '../Iconos3/style.css';
import {NavLink} from 'react-router-dom';



class CartWidget extends React.Component{
    
    render(){
        return(
            <div>
                <div className='headerContenedorSpan'>
                    <NavLink activeClassName='navLinkActivo' to={'/cart'}>
                        <span className='NavBarSpan IconoSocial-shopping-cart'></span>
                    </NavLink>
                </div> 
            </div>
        )
    }
}

export default CartWidget;

