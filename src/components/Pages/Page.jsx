import React from 'react'
import '../../../src/App.scss'
import { Link } from 'react-router-dom';

function Page() {
    const info = [
        {
            nombre: "Pedro",
            edad: 20,
            carrera: "Ingeniería",
            hobbie: "Futbol"
        },
        {
            nombre: "Rodrigo",
            edad: 22,
            carrera: "Arquitectura",
            hobbie: "Bajo eléctrico"
        },
        {
            nombre: "Romina",
            edad: 21,
            carrera: "Abogacía",
            hobbie: "Acrobacia"
        },
        {
            nombre: "Ana",
            edad: 23,
            carrera: "Contadora",
            hobbie: "Astronomía"
        }
    ]


    return (

        <div className='container__home'>
            <div className='container__test'>
                <div className='container__testtitles'>
                    <h2>Nombre</h2>
                    <h2>Edad</h2>
                    <h2>Carrera</h2>
                    <h2>Hobbie</h2>

                </div>
                <div className='container__testbody'>
                    {info.map((elem) => {

                        return (
                            <div className='testtable' key={elem}>
                                <h3>{elem.nombre}</h3>
                                <h3>{elem.edad}</h3>
                                <h3>{elem.carrera}</h3>
                                <h3>{elem.hobbie}</h3>

                            </div>
                        );
                    })}
                </div>
            </div>

            <Link to="pagetwo">
                <button>Page 2</button>
            </Link>



        </div>
    )
}

export default Page