
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/pages/Home/Main';
import About from './components/pages/About/About';
import "./App.css"
import { Routes , Route} from "react-router-dom"

function App() {
  return (
   <div>    
    
    <Routes>
      <Route path='/'>
        <Main/>
      </Route>
    </Routes>
   
   </div>
  );
}

export default App;
