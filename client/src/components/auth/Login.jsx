import React from 'react';

const Login = () => {

    const onChange = () => {

    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>

                <form>
                    <div className="campo-form">
                       <label htmlFor="email">Email</label>
                       <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingrese su correo"
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
                            onChange={onChange}
                       /> 
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesion" />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;