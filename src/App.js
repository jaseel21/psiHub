
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/pages/Home/Main';
import "./App.css"
import {BrowserRouter as Router,Route} from "react-router-dom"
import Header from "./components/header/header"
import Footer from "./components/Footer/Footer"
import About from './components/pages/About/About';
import Contact from "./components/pages/Contact/Contact"
import FixedButton from './components/Fixed-button/FixedButton'
// import Thanks from "./components/Thanks/Thanks"


function App() {
  return (
      
   
   
     <div className="App">

       <Router>
       <Header/>
         <Route exact path='/' component={Main}/>
         <Route  component={About} path='/about'/>
         <Route path='/contact' component={Contact}/>
       <FixedButton/>
       <Footer/>
       </Router> 
     </div>
    
    
    
   
  
  );
}

export default App;
