import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Profile from '../Profile';

import './Gallery.css';

export default function Gallery() {
  const [users, setUsers] = useState([]);

  const [error, setError] = React.useState('');

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    }

    // Obtener los datos con fetch

    // fetch('https://60f2262e6d44f3001778853a.mockapi.io/api/registro', requestOptions)
    //   .then(async response => {
    //     const isJson = response.headers.get('content-type')?.includes('application/json');
    //     const data = isJson && await response.json();

    //     // Checar por respuesta del usuario
    //     if (!response.ok) {
    //       const error = { message: data, status: response.status };
    //       return Promise.reject(error);
    //     }

    //     setUsers(data);
    //   })
    //   .catch(error => { setError(`Error cargando galería (${error.status}): ${error.message}`) });


    // Obtener los datos con Axios
    axios.get('https://60f2262e6d44f3001778853a.mockapi.io/api/registro')
      .then(response => setUsers(response.data))
      .catch(error => { setError(`Error(${error.status}): ${error.message}`) })
  }, [])


  return (
    <div className='galleryContainer'>
      {error && <div className='galleryError'>{error}</div>}
      {!users.length && <p>Sin usuarios</p>}
      {users.map(user => <Profile key={user.id} name={user.name} email={user.email} />)}
    </div>
  )
}
