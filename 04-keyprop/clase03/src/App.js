import React from "react";
import Header from "./components/Header/Header";
import FichasContainer from "./components/FichasContainer/FichasContainer";
import CategoriasContainer from "./components/CategoriasContainer/CategoriasContainer";
import Footer from "./components/Footer/Footer";

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
      <Footer/>
    </div>
  )
}

export default App;