import axios from "axios";
import React from "react";

import "./RegistrationForm.css";

export default function RegistrationForm() {
  // Inicializar el estado del formulario en blanco
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // Inicializar el estado de error y éxito
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (event) => {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();

    // Resetear el estado de error
    setError("");

    // Validar el formulario
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Please fill in all fields");
      return;
    }

    // Asegurarse que las contraseñas coincidan
    if (password.trim() !== confirmPassword.trim()) {
      setError("Passwords do not match");
      return;
    }

    console.log(`Data submitted:
    name: ${name}
    email: ${email}
    password: ${password}
    confirmPassword: ${confirmPassword}`);

    // Enviar el formulario con fetch

    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password
    //   })
    // }

    // fetch('https://60f2262e6d44f3001778853a.mockapi.io/api/registro', requestOptions)
    //   .then(async response => {
    //     const isJson = response.headers.get('content-type')?.includes('application/json');
    //     const data = isJson && await response.json();

    //     // Checar por respuesta del usuario
    //     if (!response.ok) {
    //       const error = { message: data, status: response.status };
    //       return Promise.reject(error);
    //     }

    //     setSuccess(true)
    //   })
    //   .catch(error => { setError(`Error(${error.status}): ${error.message}`) });

    // Enviar el formulario con Axios

    axios.post('https://my-money-esme.herokuapp.com/signup/', {
      email,
      password
    }).then(response => setSuccess(true))
      .catch(error => { setError(`Error(${error.status}): ${error.message}`) });
  }

  // Mostrar el mensaje de éxito si el estado success es true
  if (success)
    return (
      <div className="registrationForm registrationForm__success">
        Registered successfully
      </div>
    );

  // Mostrar el formulario
  return (
    <form className="registrationForm" onSubmit={handleSubmit}>
      {error && <div className="registrationForm__error">{error}</div>}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        />
      </label>
      <button type="submit" className="registrationForm__submit">
        Submit
      </button>
    </form>
  );
}
