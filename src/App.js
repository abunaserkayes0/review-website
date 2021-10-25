import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route> 
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about"></Route>
          <Route path="/service"></Route>
          <Route path="/contact"></Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
