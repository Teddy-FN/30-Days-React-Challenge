import React,{Component} from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        console.log('INI HEADER',this.props)
        return(
            <header>
                <h1>{this.props.data.welcome}</h1>
                <h2>{this.props.data.title}</h2>
                <h3>{this.props.data.subTitle}</h3>
            </header>
        )
    }
}