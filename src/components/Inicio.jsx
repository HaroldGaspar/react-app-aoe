import React from 'react'

const Inicio = () => {
    React.useEffect(()=>{
        document.title='Inicio efect'
    })
    return ( 
        <p>hola </p>
     );
}
 
export default Inicio;