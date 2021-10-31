import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddANewService from './components/AddANewService/AddANewService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addanewservice">
            <AddANewService></AddANewService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/orders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/services/myorders/:id">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/manageallorders">
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path="/services/placeorder/:id">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="**">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
