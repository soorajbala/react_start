import React from 'react'
import text from './titles.json'

export const hello = (
  <h1 id="title"
      className="header"
      style={{backgroundColor: 'red', color: 'yellow'}}
  >
    { text.hello }
  </h1>
)

export const goodbye = (
  <h1 id="title"
      className="header"
      style={{backgroundColor: 'red', color: 'yellow'}}
  >
    { text.goodbye }
  </h1>
)