import React from 'react'
import {Container, Section, Button} from 'react-bulma-components'


const CompoB = ({title}) =>{

    return (

        <Section>
            <Container>

            <h1 className="title is-2">{title}</h1>

                <Button className ="button is-danger">
                    Enviar
                </Button>
            </Container>
        </Section>



    )
}

export default CompoB