import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Logo from './temp.png'
import {useState} from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Component/Menu'
import Createsurvey from "./Component/Createsurvey"
import Published from "./Component/publish"
import {Link} from 'react-router-dom'

function App() {
  const[squestion ,setsquestions] = useState([]);


  return (
    <>
    <div className="col-md-10 offset-md-1 col-12 text-center">
        
        <Router>
           <Link to="/" >
              <img className="col-md-6" alt='logo' src={Logo}/>
            </Link>
          <Switch>
            
            <Route path="/" component={Menu} exact />
            <Route path="/create" >
              <Createsurvey squestion ={squestion} setsquestions={setsquestions}  />
            </Route>
            <Route path="/publish" >
                  <Published question = {squestion}/>
            </Route>
            

          </Switch>
        </Router>
        
    </div>
    </>
  );
}

export default App;
