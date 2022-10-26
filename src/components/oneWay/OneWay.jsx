import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { parseDate } from '../../utils/stringFunctions';
import { backgroundStyle } from '../../utils/style'
import { searchFligths } from '../../services/getflight';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export const OneWay = () => {

  const navigate = useNavigate()
  const initialDate = new Date();
  const currentDate = parseDate(initialDate);
  // const [dateIdaValue, setDateIdaValue] = useState(currentDate);
  // const [dateRegValue, setDateRegValue] = useState(currentDate)

  const [dataForm, handleChangeInput ] = useForm({
    origen: "",
    destino: "",
    dateVuelo: "",
    pasajeros: ""
  });


  // const handleChangeIda = (e) => {
  //   const newDate = e.target.value;
  //   setDateIdaValue(newDate);
  // }
  // const handleChangeReg = (e) => {
  //   const newDate = e.target.value;
  //   setDateRegValue(newDate)
  // }

  const filterFligth = async(dataForm)=>{
    const filteredFlights = await searchFligths(dataForm)
    
    if (filteredFlights.length) {
      sessionStorage.setItem('vuelosIda', JSON.stringify(filteredFlights))
      navigate('/flights')
    }else{
      Swal.fire(
        'upps',
        'No se encontraron vuelos!',
        'error'
      )
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.clear();
    console.log(dataForm);
    if (
      dataForm.origen !== "" &&
      dataForm.destino !== "" &&
      dataForm.dateVuelo !== "" &&
      dataForm.pasajeros !== ""
    ) {
      console.log("se puede continuar");
      await filterFligth(dataForm)
    } else {
      console.log("llene los datos porfavor");
    }
  };
  



  return (
    <>
    <div className='vh-100' style={backgroundStyle}>

<div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='col-sm-10 col-md-6 col-xl-6 d-flex flex-column gap-3 p-5 border bg-light shadow-lg rounded'>
      <h1>Busca un nuevo destino y comienza la aventura</h1>
      <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
      <div className='bg-white d-flex col-md-6 justify-content-between p-2'>
        <Link to='/' className='text-decoration-none btn btn-outline-primary'>Viaje redondo</Link>
        <Link to='#' className='text-decoration-none btn btn-primary'>Viaje sencillo</Link>
      </div>
      <form className='d-flex flex-column gap-3' onSubmit={handleSubmit}>
        <div className='col-md-12 d-flex gap-3'>
        <select className="form-select" name='origen' aria-label="Default select example" onChange={handleChangeInput}>
            <option selected>Origen</option>
            <option value="Medellin">Medellín</option>
            <option value="Cartagena">Cartagena</option>
            <option value="3">Three</option>
        </select>
        <select className="form-select" name='destino' aria-label="Default select example" onChange={handleChangeInput}>
            <option selected>Destino</option>
            <option value="Medellin">Medellín</option>
            <option value="Cartagena">Cartagena</option>
            <option value="3">Three</option>
        </select>
        </div>
        <div className='col-md-12 d-flex gap-3'>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Salida</span>
        <input type="date" name='dateVuelo' className="form-control" aria-label="Fecha" aria-describedby="date" min={currentDate} onChange={handleChangeInput}/>
        </div>
        </div>
        <div className='col-md-12 d-flex gap-3'>
        <select className="form-select" name='pasajeros' aria-label="Default select example" onChange={handleChangeInput}>
            <option selected>Cantidad de pasajeros</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        </div>
        <button type="submit" className="btn btn-primary">Buscar</button>
    </form>
      </div>
    </div>
    </div>
    <div className='container p-5'>
      <h2 className='mb-4'>Pago seguro</h2>
      <div className='col-md-12 p-4 border d-flex justify-content-between shadow-lg rounded'>
        <article>
          <p>Tarjeta de crédito de débito y pago electrónico</p>
          <div className='d-flex gap-4'>
            <img src='https://cdn-icons-png.flaticon.com/512/349/349228.png' width='50' height='30'></img>
            <img src='https://expotur-eco.com/wp-content/uploads/2020/05/PayPal-Logo.png' width='50' height='30'></img>
            <img src='https://www.oafondos.com.mx/assets/Imagenes2/invex.jpg' width='50' height='30'></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg' width='50' height='30'></img>
          </div>
        </article>
        <article>
          <p>Efectivo en cualquiera de las sucursales participantes</p>
          <div className='d-flex gap-4'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Oxxo_Logo.svg/1200px-Oxxo_Logo.svg.png' width='50' height='30'></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/1200px-7-eleven_logo.svg.png' width='30' height='30'></img>
            <img src='https://1000marcas.net/wp-content/uploads/2020/02/Walmart-logo-1.jpg' width='50' height='30'></img>
            <img src='https://us.smilemate.com/internal-api/v1/assets/5d666327-f0f6-4018-8121-5ab3b90e9af9' width='50' height='30'></img>
          </div>
        </article>
      </div>
      <h2 className='mt-5 mb-4'>Servicios disponibles</h2>
      <div className='d-flex justify-content-between'>
        <article className='d-flex flex-column align-items-center p-4 border rounded shadow-lg col-md-2'>
        <img src='https://cdn-icons-png.flaticon.com/512/632/632591.png' width='100' height='100'></img>
        <p className='mt-4 h6'>Transporte</p>
        <p className='text-center'>Renta un auto o reserva un shuttle.</p>
        </article>
        <article className='d-flex flex-column align-items-center p-4 border rounded shadow-lg col-md-2'>
        <img src='https://cdn-icons-png.flaticon.com/512/632/632579.png' width='100' height='100'></img>
        <p className='mt-4 h6'>Vuelos + Hoteles</p>
        <p className='text-center'>Encuentra las mejores ofertas para tu viaje.</p>
        </article>
        <article className='d-flex flex-column align-items-center p-4 border rounded shadow-lg col-md-2'>
        <img src='https://cdn-icons-png.flaticon.com/512/340/340269.png' width='100' height='100'></img>
        <p className='mt-4 h6'>Grupos</p>
        <p className='text-center'>Obten una cotización para grupos de más de 9 personas.</p>
        </article>
        <article className='d-flex flex-column align-items-center p-4 border rounded shadow-lg col-md-2'>
        <img src='https://cdn-icons-png.flaticon.com/512/341/341144.png' width='100' height='100'></img>
        <p className='mt-4 h6'>Hoteles</p>
        <p className='text-center'>Reserva cualquier habitación en cualquier parte del mundo.</p>
        </article>
        <article className='d-flex flex-column align-items-center p-4 border rounded shadow-lg col-md-2'>
        <img src='https://cdn-icons-png.flaticon.com/512/341/341188.png' width='100' height='100'></img>
        <p className='mt-4 h6'>Carga</p>
        <p className='text-center'>Contamos con un servicio de carga y mensajería.</p>
        </article>
      </div>
    </div>
    </>

  )
}

export default OneWay
