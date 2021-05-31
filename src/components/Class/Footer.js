import React from 'react'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('INI FOOTER',this.props)
        return(
            <footer>
                <h1>CopyRight {this.props.date.getFullYear()}</h1>
            </footer>
        )
    }
}