import React,{useState} from 'react'
import ReactDOM from 'react-dom'

// Style
import './App.css'

// Import Func Comp 
import {State} from './components/Function/State'
import {Conditional} from './components/Function/Conditional'



// Import Class Comp
import StateClass from './components/Class/StateClass'



const App = (props) => {

  // UseState untuk rendering 
  const [loggedIn, setLoggedIn] = useState(false)
  const handlerLogin = () => {
    setLoggedIn(loggedIn !== !loggedIn)
  }


  console.log('INI PROPS',props)
  const title = '30 Days Challenge React'
  const dataUser = props.data

  const showDate = (items) => {
    console.log('ITEMS PADA SHOWDATE',items)
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const month = months[items.getMonth()]
    const date = items.getDate()
    const years = items.getFullYear()
    console.log('INI MONTHS',month)
    console.log('DATEEEE', date)
    console.log('YEARSSS', years)
    return `${date}/${month}/${years}`
  }


  // Destruction Class Comp
  const {
    itemsClass
  } = props.Class

  // Destruction functional comp
  const {
    itemsFunct
  } = props.functionsnal


  // UsetState Rendering
  let status 
  let text
  if (loggedIn) {
    status = <h1>Welcome to 30 Days Of React</h1>
    text = 'Logout'
  } else {
    status = <h1>Please login</h1>
    text = 'Login'
  }
  return (
    <div className="container">
      <header className="header-wrapper">
        <h1>{title} By : {props.data.author.firstName}</h1>
        <p>Date : {showDate(dataUser.date)}</p>
      </header>
      <main className="content-wrapper">
        <article>
          <section className="section-wrapper functional">
            <h1>Functional Components</h1>
            <section>
              {/* Challenge Compo */}
              <section>
                <h2>{itemsFunct}</h2>
              </section>
              <section>
                <State />
              </section>
            </section>

            {/* Rendering Compo */}
            <section className="cards-conditional">
              <h1>{props.functionsnal.renderingsComp}</h1>
              <section>
                {Conditional}
              </section>
            </section>
          </section>
          
          
          {/* Class Coponents */}
          <section className="section-wrapper class">
            <h1>Class Components</h1>
            <section>
              <h2>{itemsClass}</h2>
            </section>
            <section>
                <StateClass />
            </section>

            {/* Conditional Rendering */}
            <section className="class-wrapper">
                <h1>{props.Class.renderingClass}</h1>
            </section>
          </section>
        </article>
      </main>
    </div>
  )
}
App.defaultProps = {
  data : {
    author : {
      firstName : 'Asabaneh'
    },
    firstName : 'Teddy Ferdian',
    lastName: 'Abrar Amrullah',
    date: new Date()
  },

  Class : {
    itemsClass: 'State Class Comp',
    renderingClass: 'Rendering Components Class'
  },
  functionsnal : {
    itemsFunct: 'State Functional Comp',
    renderingsComp: 'Rendering Components Functional'
  }
}

const rootElements = document.getElementById('root')
ReactDOM.render(<App />, rootElements)