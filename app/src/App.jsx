import './styles/styles.css';
import CheckList from "./components/CheckList";
import DragDrop from "./components/DragDrop";
import Slides from "./components/Slides";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className='app'>
        <Nav/>
          <div className='content d-md-flex justify-content-md-center'>
            <Switch>
              <Route exact path="/">
                <CheckList/>
              </Route>
              <Route exact path="/slides">
                <Slides/>
              </Route>
              <Route exact path="/dragDrop">
                <DragDrop/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  )
}

export default App;
