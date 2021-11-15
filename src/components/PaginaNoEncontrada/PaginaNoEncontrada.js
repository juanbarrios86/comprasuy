import React from 'react'
import { Link } from 'react-router-dom'
import {Images} from "../../assets/index"

export const PaginaNoEncontrada = ()=> {

    //Control de error 404

    return (
        <div>
            <h2>Error 404 - Página no encontrada</h2> <hr/>
            <div className="my-2"><img  src={Images[12]} alt="carro"/></div>
            <hr/>
            <Link to="/" className="btn btn-success my-2">Ir a comprar</Link>
        </div>
    )
}