import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { editarProductoAction } from "../actions/productoAction";

const EditarProducto = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // nuevo state de producto
  const [producto, guardarProducto] = useState({
    nombre:'',
    precio: ''
  })

  // producto a editar
  const productoeditar = useSelector(state => state.productos.productoeditar);
  
  // llenar el state automáticamente
  useEffect(() => {
    guardarProducto(productoeditar)
  }, [productoeditar])
  
  // Leer los datos del formulario
  const onChangeFormulario = e => {
    guardarProducto({
      ...producto,
      [e.target.name] : e.target.value
    })
  }

  const {nombre, precio} = producto;

  const submitEditarProducto = e => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    navigate('/');
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Editar Producto
            </h2>
            <form
              onSubmit={submitEditarProducto}
            >
              <div className='form-group'>
                <label htmlFor='nombre'>Nombre Producto</label>
                <input 
                  type='text'
                  id='nombre'
                  className='form-control'
                  placeholder='Nombre Producto'
                  name='nombre'
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='precio'>Precio Producto</label>
                <input 
                  type='number'
                  id='precio'
                  className='form-control'
                  placeholder='Precio Producto'
                  name='precio'
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditarProducto