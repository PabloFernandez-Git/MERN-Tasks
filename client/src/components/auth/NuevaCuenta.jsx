import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {

    // State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // Extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    // Funciones
    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiera iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        // Validacion (campos vacios)

        // Password (minimo 6 caracteres)

        // Revisar passwords sean iguales

        // Pasarlo al action
    }


    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                       <label htmlFor="nombre">Nombre</label>
                       <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Ingrese su nombre"
                            value={nombre}
                            onChange={onChange}
                       /> 
                    </div>

                    <div className="campo-form">
                       <label htmlFor="email">Email</label>
                       <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingrese su correo"
                            value={email}
                            onChange={onChange}
                       /> 
                    </div>

                    <div className="campo-form">
                       <label htmlFor="password">Password</label>
                       <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={onChange}
                       /> 
                    </div>

                    <div className="campo-form">
                       <label htmlFor="confirmar">Confirmar Password</label>
                       <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repita su contraseña"
                            value={confirmar}
                            onChange={onChange}
                       /> 
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesion
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;