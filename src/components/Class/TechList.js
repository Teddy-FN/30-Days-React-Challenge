import React from 'react'

class TechList extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        console.log('PROPS TECH WEB',this.props)
        // Desctruturing props on array
        const {tech} = this.props
        return ( 
            <main>
                <article>
                    <h1>{this.props.title}</h1>
                <section>
                {
                    tech.map((items, idx) => {
                        return (
                        <ul key={idx}>
                            <li>{items}</li>
                        </ul>
                        )
                    })
                }
                </section>
                </article>
            </main>
        );
    }
}
 
export default TechList;