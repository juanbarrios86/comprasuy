import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import {Images} from "../../assets/index"


export const ItemDetail = ({ id, name, price, img, description, category, stock} ) => {

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const newItem = {
            id,
            name,
            price,
            category,
            cantidad,
            stock
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
    }
    
    //Mostramos el detalle de un Item y controlamos que sea válido. En caso de ser válido se va a poder agregar al carro.
    
    return (
        <div>

        { name === undefined
            ?<>
            <h2>No podemos encontrar el item que ingresó</h2>
            <div  className="my-2"><img width="200px" height="200px" src={Images[13]} alt="lupa"/></div>
            <hr/>
            <Link to="/" className="btn btn-success">Ir a comprar</Link>
            </>
            :
            <div>
                <h2 className="my-2">{name}</h2>
                <img width="300px" height="300px" src={img} alt={name}/>
                <p>{description}</p>
                <h4>Precio: ${price}</h4>
                <h5>Stock disponible: {stock}</h5>
              

                 { isInCart(id) 
                ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                :
                    <>
                        <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                        <button
                            disabled={cantidad===0}
                            className="btn btn-success my-2"
                            onClick={handleAgregar}
                            >
                            Agregar
                        </button>
                    </>
                } 

                
            

                <hr/>
                <button 
                    className="btn btn-primary my-4"
                    onClick={() => goBack()}
                >
                    Volver
                </button>

                <button 
                    className="btn btn-primary mx-2"
                    onClick={() => push("/")}
                >
                    Volver al inicio
                </button>
            </div>
        }
        </div>
    )
}
