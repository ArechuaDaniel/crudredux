import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'


// redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction} from '../actions/productoAction'

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto ;

    const dispatch = useDispatch();

    // confirmar si quiere eliminarlo
    const confirmarEliminarProducto = id => {
        // 1. Preguntar al usuario
        Swal.fire({
            title: 'Estas seguro?',
            text: "Un producto eliminado no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminarlo!',
            cancelButtonText: 'Cancelar!',

        }).then((result) => {
            if (result.value) {
                // pasarlo al action
                dispatch(borrarProductoAction(id));
            }
        })  
    }

  return (
    <tr>
        <td>{nombre}</td>
        <td><span className='font-weight-bold'>${precio}</span></td>
        <td className='acciones'>
            <Link to={`/productos/editar/${id}`} className='btn btn-primary mr-2'>
                Editar
            </Link>
            <button
                type='button'
                className='btn btn-danger'
                onClick={() => confirmarEliminarProducto(id)}
            >
                Eliminar
            </button>
        </td>
    </tr>
  )
}

export default Producto