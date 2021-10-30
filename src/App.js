import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddANewService from './components/AddANewService/AddANewService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
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
          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/manageallorders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          {/* <Route path="/register">
            <Register></Register>
          </Route> */}
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
