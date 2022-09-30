import '../assets/styles/campos.css'
function Campos({nombre_label, tipo, placeholder }) {
    return (
        <div className='contenedor-campos'>
            <label>{nombre_label}</label>
            <input type={tipo} placeholder={placeholder} ></input>
        </div>
    )
}

export default Campos