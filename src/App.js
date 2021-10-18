
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import DoctorList from './Components/DoctorList/DoctorList';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';

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
        <Route path="/services">
             <Services></Services>
        </Route>
        <Route path="/contactUs">
             <Contact></Contact>
        </Route>
        <Route path="/doctors">
             <DoctorList></DoctorList>
        </Route>
        <Route path="/aboutUs">
             <AboutUs></AboutUs>
        </Route>

      </Switch>
      <Footer></Footer>
      </Router>

      

      
    </div>
  );
}

export default App;
