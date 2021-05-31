import React,{useState} from 'react'

export const Conditional = (props) => {
    console.log('CONDTIONAL PROPS FUNCTIONAL',props)
    const [
        number, setNumber
    ] = useState(0)

    // Kita Destruturing props 
    

    return (
        <div className="container">
            <header>
                <h1>{props.title}</h1>
            </header>
        </div>
    )
}

Conditional.defaultProps = {
    title : 'Rendering on on functional Components'
}