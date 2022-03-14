import './App.scss';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Video from "./components/Video.js";
import requests from "./config/Request.js";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>

    <Route exact path="/">
    <Nav />
    <Banner />
    <Row title="Programme originaux Netlifx" fetchUrl={requests.fetchNetflixOriginals} isPoster={true}/>
    <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending}/>
    <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated}/>
    <Row title="Films d'action" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Films d'horreur" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Comédies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Documentaites" fetchUrl={requests.fetchDocumentaries}/>

    <Footer />
    </Route>
    <Route path="/video/:id" component={Video} />
    <Route path="*">
    <Redirect to="/" />
    </Route>

    </Switch>
    </Router>

    </div>
  );
}

export default App;
