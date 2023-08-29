import React, { Component } from 'react'
import CharactersContainer from '../../components/CharactersContainer/CharactersContainer'
export default class index extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
    <div>
        <CharactersContainer />
    </div>
    )
  }
}
