import React from 'react'

export const MyComponent = () => {
    const name = "francisco"
    const reposiroty = "https://github.com/inesmariao/component-practice"
    const student = {
        name: "carlos",
        lastname: "caro",
        mobile: "30000000",
        linkedinProfile: "https://linkedin.com/in/carlos-caro"
    }
   return (
    <div>
        <hr />
        <p>Esto es un parrafo</p>
        <h2>Temas de react</h2>
        <ul>
            <li>Componente</li>
            <li>Eventos</li>
            <li>Estados-Hooks</li>
            <li>Comunicación</li>
        </ul>
        <hr />
        <h2>Datos del docente</h2>
        <p>Nombre: { name }</p>
        <p>Repositorio:</p>
        <p>{ reposiroty }</p>
        <hr />
        <h2>Datos del estudiante</h2>
        <p>Nombre: { student.name }</p>
        <p>Nombre: { student.lastname }</p>
        <p>Nombre: { student.mobile }</p>
        <p>Nombre: { student.linkedinProfile }</p>
    </div>
  )
}
