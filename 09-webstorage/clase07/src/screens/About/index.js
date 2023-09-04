import React, { Component } from 'react'
import { options } from '../../utils/constants'

class index extends Component {

  componentDidMount(){
    fetch('https://api.themoviedb.org/3/discover/movie', options)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>
        ESTE ES EL ABOUT
        </h1>
    </div>
    )
  }
}

export default index
