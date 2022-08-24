import React, { useState, useId } from 'react'
import '../../../src/App.scss'
import { Link } from 'react-router-dom';
import TodoApp from '../Todo'

function Page2() {



    return (

        <div className='container__home'>
            <h4> Y en la otra screen/ruta armar un formulario de 2 o 3 campos (usando hooks para manipular los datos/estado) donde al tocar el botón submit tome los datos ingresados y los ponga debajo o en un console.log</h4>
            <TodoApp />
            <Link to="/">
                <button>Page 1</button>
            </Link>



        </div>
    )
}
export default Page2