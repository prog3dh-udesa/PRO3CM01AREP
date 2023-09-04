import React, { Component } from 'react'
import FichasContainer from "../../components/FichasContainer/FichasContainer";
import CategoriasContainer from "../../components/CategoriasContainer/CategoriasContainer";
import CharactersContainer from "../../components/CharactersContainer/CharactersContainer";
import Contador from "../../components/Contador/Contador";
import MiForm from "../../components/MiForm/MiForm";
import './styles.css'

class index extends Component {
  render() {
    return (
        <div>
        <h1>My App in React</h1>
        <main>
          <FichasContainer />
          <h2>Categories in database</h2>
          <CategoriasContainer />
        </main>
        <Contador />
      </div>
    )
  }
}

export default index
