
import Footer from './components/Footer';
import Header from './components/Header';
import Recipe from './pages/Recipe';
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import About from "./pages/About"
import NotFound from './pages/NotFound';
import Category from "./pages/Category"
import {Route, Switch} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Header/>
      <main className='container content'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/about' component={About}/>
          <Route path='/category/:name' component={Category}/>
          <Route path="/recipe/:id" component={Recipe}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
