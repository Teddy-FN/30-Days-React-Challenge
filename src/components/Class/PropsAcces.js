import React,{Component} from 'react'


export default class PropsAcces extends Component {
    constructor(props) {
        super(props)

    }

    render(){
        const datas = this.props.data
        console.log('INI DATAS',datas)
        const getYear = this.props.data.date.getFullYear()
        console.log(getYear,'GET YEAR')
        return(
            <div>
                <header>
                    <h1>{datas.welcome}</h1>
                    <h2>{datas.title}</h2>
                    <h3>{datas.subTitle}</h3>
                    <p>{datas.author.firstName} {datas.author.lastName}</p>
                    <small>{getYear}</small>
                </header>
            </div>
        )
    }
}
