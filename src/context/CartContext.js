import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(init)

       
    const addToCart = (item) => {
      setCarrito( [...carrito, item] )
    }
    
    const removeItem = (itemId) => {
      const newCart = carrito.filter( (prod) => prod.id !== itemId)
      setCarrito( newCart )
    }
      
    const calcularCantidad = () => {
      return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0 )
    }

    const calcularTotal = () => {
      return carrito.reduce( (acc, prod) => acc + prod.cantidad * prod.price, 0)
    }

    //Maneja las cantidades de cada linea en el Cart (Resumen de compra)
    
    const setCantidades = (prod, monto) => {
      let newCarrito = carrito.map(item => item.id === prod ? {
        ...item,
                cantidad: item.cantidad + monto
      } : item)
      setCarrito(newCarrito);
    };

    const isInCart = (itemId) => {
      return carrito.some( (prod) => prod.id === itemId)
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
    
    useEffect(()=>{
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
  
    return (
        <CartContext.Provider value={ {
            carrito,
            addToCart,
            removeItem,
            calcularCantidad,
            vaciarCarrito,
            setCantidades,
            isInCart,
            calcularTotal
        }}>
            {children}
        </CartContext.Provider>
    )

}
