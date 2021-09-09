import React from 'react'
import {Container, Section} from 'react-bulma-components'

const CompoA = ({title}) =>{
    
    return (

       <section>
           <Container>
               <h1 className="title is-2">{title}</h1>
           </Container>
       </section>
    )
}

export default CompoA