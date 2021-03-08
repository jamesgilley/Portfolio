import Header from './Header'
import Main from './Pages/Main'
import Portfolio from './Pages/Portfolio'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Main} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
