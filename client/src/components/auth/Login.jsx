import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    // State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // Extraer de usuario
    const { email, password } = usuario;

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

        // Validacion

        // Pasarlo al action
    }


    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesion" />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;