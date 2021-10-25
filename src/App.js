import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/NotFound/NotFound';
import AllLanguages from './Component/AllLanguages/AllLanguages';
import TopRatedLanguage from './Component/TopRatedLanguage/TopRatedLanguage';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
           <TopRatedLanguage></TopRatedLanguage>
          </Route> 
          <Route path="/home">
            <TopRatedLanguage></TopRatedLanguage>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <AllLanguages></AllLanguages>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
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
