import React from 'react'
import {Container, Section, Button} from 'react-bulma-components'


const CompoC = ({title}) =>{

    return (

        <Section>
            <Container>

            <h1 className="title is-2">{title}</h1>
            
            <div class="notification is-primary">
            <button class="delete"></button>
            Primar lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            </div>

                
            </Container>
        </Section>



    )
}

export default CompoC