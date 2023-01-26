import { BrowserRouter as Rou , Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Errorpage from './pages/Errorpage'
import Header from './components/Header';
import Footter from './components/Footter';
import Singleproduct from './components/Singleproduct';



function App() {
  return (
      <Rou>
        <Header/>
          <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path='/about' element = {<About/>}/>
              <Route path='/products/' element = {<Products/>}/>
             <Route path='/products/:id' element = {<Singleproduct/>}/>
              <Route path='/contact' element = {<Contact/>}/>
              <Route path='/cart' element = {<Cart/>}/>
              <Route path='*' element = {<Errorpage/>}/>

          </Routes>

        <Footter/>
      </Rou>
  );
}

export default App;
