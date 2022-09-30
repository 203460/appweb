import '../assets/styles/form.css'
import Campos from '../components/Campos'

function Form({ title }) {
    return (
        <form>
            <h1>{title}</h1>
            <Campos
                nombre_label='Nombre'
                tipo='text'
                placeholder='Nombre'
            />
            <Campos
                nombre_label='Primer Apellido'
                tipo='text'
                placeholder='Primer Apellido'
            />
            <Campos
                nombre_label='Segundo Apellido'
                tipo='text'
                placeholder='Segundo Apellido'
            />
            <Campos
                nombre_label='Email'
                tipo='email'
                placeholder='email@email.com'
            />
            <Campos
                nombre_label='Direccion'
                tipo='text'
                placeholder='Direccion'
            />
            <Campos
                nombre_label='Ciudad'
                tipo='text'
                placeholder='Ciudad'
            />
            <Campos
                nombre_label='CP'
                tipo='number'
                placeholder='Codigo Postal'
            />
            <Campos
                nombre_label='Telefono'
                tipo='tel'
                placeholder='Telefono'
            />
            <Campos
                nombre_label='Url'
                tipo='url'
                placeholder='Url'
            />
            <Campos
                nombre_label='Empresa'
                tipo='text'
                placeholder='Empresa'
            />

            <input className='boton' type='submit' ></input>

        </form>
    )
}

export default Form