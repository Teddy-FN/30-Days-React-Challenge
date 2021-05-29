import React from 'react'
import ReactDOM from 'react-dom'
import './style/props.css'

const GenerateColor = (props) => {
  console.log('INI PROPS COLOR',props)
  const data = props
  const { colorsText } = data
  console.log('colorsTextWKWKWKW',colorsText)
  return (
    <header>
        <div className="header-wrapper">
          <h1>{props.text.title}</h1>
        </div>
        <section>
            <HexaColor color={colorsText}/>
        </section>
    </header>
  )
}

const HexaColor = ({color}) => {
  console.log('INI PROPS HEXA',color)
  let arr = []
  for (let i = 0; i <= 5; i ++) {
    let Hexcolors = '#'
    for (let hexa = 0; hexa < 6; hexa++) {
      Hexcolors += color.charAt(Math.floor(Math.random() * color.length))
    }
    console.log('FINAL',Hexcolors)
    arr.push(Hexcolors)
  }
  console.log('ARR HEXA',arr)
  return (
    <main>
        <section>
          {
            arr.map((items, idx) => {
              return (
                <div key={idx} className="hexa-color" style={{ backgroundColor: items }}>
                  <p>{items}</p>
                </div>
              )
            })
          }
        </section>
    </main>
  )
}

const App = () => {
  const colorsText = '0123456789abcdef'
  const text = {
    title : 'Generate Colors',
    date: new Date()
  }
  return (
    <div className="container">
      <GenerateColor colorsText={colorsText} text={text}/>
    </div>
  )
}

const rootElements = document.getElementById('root')
ReactDOM.render(<App />, rootElements)