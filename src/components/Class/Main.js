import React from 'react'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('INI MAIN',this.props)
        // Try Destruturing 
        const {
            techs,
            user,
        } = this.props
        console.log('USER PROPS',user)

        return(
            <main>
                <article>
                    <section>
                        <img src={user.image.Teddy} alt="Teddy" />
                    </section>
                    <section>
                        <h4>{user.author.firstName} {user.author.lastName}</h4>
                        <section>
                            <p>{user.job}</p>
                        </section>
                    </section>
                    <section>
                        {
                            techs.map((items, idx) => {
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
        )
    }
}