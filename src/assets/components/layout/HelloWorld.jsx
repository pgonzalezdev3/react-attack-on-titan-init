import React from 'react'

function HelloWorld(props) {
    return (
        <div>
            <h1>Hello World desde React!</h1>
            <p>Hola, soy el componente HelloWorld.jsx</p>
            <p>He sido creado por {props.name}</p>
        </div>
    )
}

export default HelloWorld