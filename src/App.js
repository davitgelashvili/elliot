import './App.scss';
import Header from './components/header/header/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/pages/main/index'
import News from './components/pages/news/index'
import About from './components/pages/about/index'
import Faq from './components/pages/faq/index'

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
