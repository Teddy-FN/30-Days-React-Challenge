import React from 'react'
import ReactDOM from 'react-dom'
import './style/props.css'

import Teddy from './img/teddy.png'


// Header 
const Header = ({data, navs}) => {
  console.table('INI PROPS DATA',data)
  console.log('INI PROPS NAVS', navs)
  const navigasi = navs.map((items, idx) => {
    return <ul key={idx}><li>{items}</li></ul>
  })
  return (
    <div className="card-wrapper">
        <header className="header-wrapper">
          <section className="logo-wrapper">
            <h1>User Profile</h1>
          </section>
          <nav>
            {navigasi}
          </nav>
        </header>
        <main>
          <article className="profile-user-wrapper"> 
            <section className="profile-pic-wrapper">
              <img src={Teddy} alt="profile-user"/>
            </section>
            <section>
              <h1>{data.name.firstName} {data.name.lastName}</h1>
            </section>
          </article>
        </main>
        <footer>

        </footer>
    </div>
  )
}

const App = () => {
  const data = {
    name: {
      firstName: 'Teddy',
      lastName: 'Ferdian'
    },
    age: 22,
    address: {
      street: 'Mojo',
      city: 'Sukoharjo'
    },
    job: 'Software Engginer',
    jobSkill: ['Frontend', 'Backend', 'FullStack'],
    techWebs : 'HTML, CSS, JavaScript, React, Node, GIT, Express, MongoDB',
    date: new Date()
  }
  const navs = [
    'Contact', 'About', 'Profile'
  ]
  return(
    <div>
        <Header data={data} navs={navs}/>
    </div>
  )
}
const rootElements = document.getElementById('root')
ReactDOM.render(<App />, rootElements)