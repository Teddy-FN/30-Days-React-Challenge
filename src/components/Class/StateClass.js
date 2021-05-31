import React from 'react'

export default class StateClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    // Make method on class Component
    handlerPlus = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handlerMinus = () => {
        if(this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        } else {
            alert(this.props.alertsZero)
        } 
    }

    render() {
        // Destructuring state
        const {
            count
        } = this.state
        return( 
            <div>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                <main>
                    <article>
                        <section>
                            <h1>{count}</h1>
                        </section>
                        <section>
                            <section>
                                <button onClick={this.handlerPlus}>Add Plus</button>
                            </section>
                            <section>
                                <button onClick={this.handlerMinus}>Add Minus</button>
                            </section>
                        </section>
                    </article>
                </main>
            </div>
        )
    }
}

StateClass.defaultProps = {
    title : 'Plus and Minus event Class Components',
    alertsZero : 'Your\'e in 0 number'
}