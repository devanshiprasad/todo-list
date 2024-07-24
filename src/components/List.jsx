import React from 'react'
import Card from './Card'
export default function List(props) {
 const {todos}=props
return(
        <ul className='main'>
        {todos.map((todos,todoIndex) =>{
            return(
                <Card  {...props} key={todoIndex} index={todoIndex}>
                    <p>
                        {todos}
                        </p> 
                        </Card>
                
            )
        })}

        </ul>
)
}
