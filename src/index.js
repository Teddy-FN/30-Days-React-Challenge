import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Header Class Comp
class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Hello This is Class Components</h1>
        <h2>Getting Staeted</h2>
        <h3>By : Teddy Ferdian Abrar Amrullah</h3>
        <small>May, 2021</small>
      </div>
    )
  }
}



class TechList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const techWebs = [
      'HTML', 'CSS', 'JS', 'React', 'GIT', 'Node', "Express"
    ]
    return (
      <article>
        <section>
          <h1>Tech List</h1>
        </section>
          {
            techWebs.map((items, idx) => {
              console.log('ITEMS ARR',items)
              return (
                  <ul key={idx}>
                    <li>{items}</li>
                  </ul>
              )
            })
          }
      </article>
    )
  }
}

// Main
class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article>
        <section>
            Reqiuremenst learn React is :
        </section>
        <section>
          <TechList/>
        </section>
      </article>
    )
  }
}

// Footer Components
class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article>
        <p>CopyRight 2021</p>
      </article>
    )
  }
}

// Class Components 
class App extends Component {
  constructor(props) {
    super(props)
  }
  render()  {
    return(
      <div className="container">
        <header>
          <Header/>
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}


const rootElements = document.getElementById('root')
ReactDOM.render(<App />, rootElements)