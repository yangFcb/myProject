import React, { render } from "./react"

const root = document.getElementById('root')

const jsx = (
    <div>
      <p>Hello React</p>
      <p>Hi Fiber</p>
    </div>
  )
  
  render(jsx, root)
  
  setTimeout(() => {
    const jsx = (
      <div>
        <div>奥利给</div>
        <p>Hi Fiber</p>
      </div>
    )
    render(jsx, root)
  }, 2000)