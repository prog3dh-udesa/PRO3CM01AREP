import React from "react";
import Header from "./components/Header/Header";
import FichasContainer from "./components/FichasContainer/FichasContainer";
import CategoriasContainer from "./components/CategoriasContainer/CategoriasContainer";
import Footer from "./components/Footer/Footer";
import CharactersContainer from "./components/CharactersContainer/CharactersContainer";
import Contador from "./components/Contador/Contador";
import MiForm from "./components/MiForm/MiForm";
import './styles.css'
function App() {
  return(
    <div>
      <Header/>
      <h1>My App in React</h1>
      <main>
        <FichasContainer />
        <h2>Categories in database</h2>
        <CategoriasContainer />
      </main>
      <CharactersContainer />
      <Contador />
      <Footer/>
    </div>
  )
}

export default App;