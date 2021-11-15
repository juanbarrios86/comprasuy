import React from 'react'
import { Item } from './Item'
import { Link } from 'react-router-dom'
import {Images} from "../../assets/index"

export const ItemList = ( {productos = []} ) => {


    return (
    

        <div className="container">
            {productos.length === 0
            
            ?
            <>
                <h2>No existe la categoría que ingresó</h2>
                <hr/>
                <div className="my-2"><img  src={Images[12]} alt="carro"/></div>
                <hr/>
                <Link to="/" className="btn btn-success">Ir a comprar</Link>
            </>

            :
            <>
                <h2>Nuestros Artículos</h2>   
                <hr/>
            </>

            }
           
            
            
            <div className="row">
                { productos.map((item) => <Item {...item} key={item.id}/> )}
            </div>
        </div>
    )
}
