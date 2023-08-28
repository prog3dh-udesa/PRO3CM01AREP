import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './screens/Home'
import About from './screens/About'
import Personajes from './screens/Personajes'
import Detalle from './screens/Detalle'
import NotFound from './screens/NotFound'
function App() {
  return(
    <>
      <Header/>
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/personajes'} component={Personajes} />
        <Route path={'/personaje/id/:id'} component={Detalle} />
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </>
  )
}

export default App;