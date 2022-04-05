import React from 'react'

import './RegistrationForm.css'

export default function RegistrationForm() {
  // Inicializar el estado del formulario en blanco

  // Inicializar el estado de los errores y éxito

  const handleSubmit = (event) => {
    // Prevenir el comportamiento predeterminado del formulario

    // Resetear el estado de error

    // Validar el formulario
    
    // Asegurarse que las contraseñas coincidan

    // Enviar el formulario
    // ...

    // * Imprimir los datos ingresados en el formulario
    
    // Mostrar el mensaje de éxito
  }

  // Mostrar el mensaje de éxito si el estado success es true

  // Mostrar el formulario
  return (
    <form className='registrationForm' onSubmit={handleSubmit}>
      {/* Mostrar los errores */}
      
      <label>
        Etiqueta:
        <input />
      </label>
      
      <button>Submit</button>
    </form >
  )
};
