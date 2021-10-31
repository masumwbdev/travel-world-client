import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './pages/AddService/AddService';
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import MyAllOrders from './pages/MyOrders/MyAllOrders';
import ManageOrders from './pages/ManageOrders/ManageOrders/ManageOrders';

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
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/add-service">
            <AddService></AddService>
          </PrivateRoute>
          <Route path="/manage-orders">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="/my-orders">
            <MyAllOrders></MyAllOrders>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
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
