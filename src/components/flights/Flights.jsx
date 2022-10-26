import React, { useEffect, useState } from 'react'

export const Flights = () => {

    const vuelosIda = JSON.parse(sessionStorage.getItem('vuelosIda')) || []
    const vuelosReg = JSON.parse(sessionStorage.getItem('vuelosReg')) || []

    const [vuelosIdaS, setvuelosIdaS] = useState(vuelosIda)
    const [vuelosRegS, setvuelosRegS] = useState(vuelosReg)

    const [flightsIda] = useState(vuelosIda)
    const [valueIda, setValueIda] = useState(0)
    const flightIdaSelected = flightsIda[valueIda]

    const [flightReg] = useState(vuelosReg)
    const [valueReg, setValueReg] = useState(0)
    const flightRegSelected = flightReg[valueReg]

    const setValue = (index) => {
        setValueReg(index)
    }
    // const [flightIdaSelected, setFlightIdaSelected] = useState([])
    // const selectFlight = () => {

    //     setFlightIdaSelected(
    //         ...flightIdaSelected,

    //     )
    // }

    useEffect(() => {
        console.log(vuelosIda)
        console.log(vuelosReg);
    }, [])

  return (
    <div className='w-100 h-100 min-vh-100 bg-secondary'>
        <div className='container d-flex p-5 gap-5'>
        <section className='col-md-9'>
            <h2 className='text-light mb-4'>Vuelo de salida</h2>
            <div className='w-100 mb-5'>
                {
                    vuelosIdaS.map((vuelo, index) => (
                        <article key={index} className='bg-white border d-flex p-4 align-items-center rounded mb-4 flex-wrap'>
                            <h4>Hora Salida:</h4>
                            <p className='h6 text-secondary ms-2 me-4'>{vuelo.timeVuelo}</p>
                            <h4>Duración:</h4>
                            <p className='h6 text-secondary ms-2 me-4'>{vuelo.info.duracion}</p>
                            <h4>Precio:</h4>
                            <p className='h6 text-secondary ms-2 me-4 '>{vuelo.info.precio}</p>
                            <h4>Escalas:</h4>
                            <p className='h6 text-secondary ms-2 me-4 text-success'>{vuelo.info.scales ? 'SI' : 'NO'}</p>
                            <button className='btn btn-outline-primary' onClick={() => setValueIda(index)}>Seleccionar<br></br>Vuelo</button>
                        </article>
                    ))
                }

            </div>

            <div className='w-100'>
            <h2 className='text-light mb-4'>Vuelo de regreso</h2>
                {
                    vuelosRegS.map((vuelo, index) => (
                        <article key={index} className='bg-white border d-flex p-4 align-items-center rounded mb-4 flex-wrap'>
                            <h4>Hora Salida:</h4>
                            <p className='h6 text-secondary ms-2 me-4'>{vuelo.timeVuelo}</p>
                            <h4>Duración:</h4>
                            <p className='h6 text-secondary ms-2 me-4'>{vuelo.info.duracion}</p>
                            <h4>Precio:</h4>
                            <p className='h6 text-secondary ms-2 me-4 '>{vuelo.info.precio}</p>
                            <h4>Escalas:</h4>
                            <p className='h6 text-secondary ms-2 me-4 text-success'>{vuelo.info.scales ? 'SI' : 'NO'}</p>
                            <button className='btn btn-outline-primary'onClick={() => {setValue(index)}}>Seleccionar<br></br>Vuelo</button>
                        </article>
                    ))
                }
            </div>
        </section>
        <section className='col-md-3 bg-white rounded p-3'>
            <h6 className='d-flex gap-3'>Vuelo Ida:<p>{`${flightIdaSelected.origen} - ${flightIdaSelected.destino}`}</p></h6>
            <h6 className='d-flex gap-3'>Duración:<p>{flightIdaSelected.info.duracion}</p></h6>
            <h6 className='d-flex gap-3'>Precio:<p>{flightIdaSelected.info.precio}</p></h6>
            <hr></hr>
            <h6 className='d-flex gap-3'>Vuelo regreso:<p>{`${flightRegSelected.origen} - ${flightRegSelected.destino}`}</p></h6>
            <h6 className='d-flex gap-3'>Duración:<p>{flightRegSelected.info.duracion}</p></h6>
            <h6 className='d-flex gap-3'>Precio:<p>{flightRegSelected.info.precio}</p></h6>
            <hr></hr>
            <h6 className='d-flex gap-3'>Total<p>200.000 COP</p></h6>
        </section>
    </div>
    </div>
  )
}

export default Flights