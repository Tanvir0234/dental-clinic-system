
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Details from './Components/BookingDetails/Details';
import Contact from './Components/Contact/Contact';
import DoctorList from './Components/DoctorList/DoctorList';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import Success from './Components/SuccessBooking/Success';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
         <AuthProvider>
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
        <Route path="/details/:serviceId">
             <Details></Details>
        </Route>
        <Route path="/login">
             <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path="/success">
             <Success></Success>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
      

      
    </div>
  );
}

export default App;
