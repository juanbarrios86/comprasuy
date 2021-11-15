
import Swal from 'sweetalert2'

export const Alerta = (icono, titulo, texto) => {

//Simplifico en un componente el sweetalert

    return (

        Swal.fire({
                        icon: icono,
                        title: titulo,
                        text: texto
                        
                    })
            )
}