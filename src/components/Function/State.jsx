import React,{useState} from 'react'

export const State = (props) => {
    console.log('INI PROS STATE FUNCTION',props)
    const [number, setNumber] = useState(0)
    
    const handlerPlus = () => {
        console.log(number + 1)
        setNumber(number + 1)
    }

    const handlerMinus = () => {
        console.log(number - 1)
        setNumber(number - 1)
    }

    return (
        <div>
            <header>
                <h1>{props.title}</h1>
            </header>
            <main>
                <h1>{number}</h1>
                <div>
                    <section>
                        <button onClick={handlerPlus}>Add Plus</button>
                    </section>
                    <section>
                        <button onClick={handlerMinus}>Add Minus</button>
                    </section>
                </div>
            </main>
        </div>

    )
}

State.defaultProps = {
    title : 'Event Click Plus and Minus'
}

