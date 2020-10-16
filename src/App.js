import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Responsive.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import OrderPage from './Components/UserPage/OrderPage/OrderPage';
import UserReview from './Components/UserPage/UserReview/UserReview';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceList from './Components/UserPage/ServiceList/ServiceList';
import AdminServiceList from './Components/AdminPage/AdminServiceList/AdminServiceList';
import AdminAddService from './Components/AdminPage/AdminAddService/AdminAddService';
import AddAdmin from './Components/AdminPage/AddAdmin/AddAdmin';
import NotAdmin from './Components/AdminPage/NotAdmin/NotAdmin';
import AdminRoute from './Components/AdminPage/AdminRoute/AdminRoute';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({isSignedIn: false, id: "5f8741bdbcf9d9300c4b1c8e", admin: false})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/user/order">
            <OrderPage></OrderPage>
          </PrivateRoute>
          <PrivateRoute path="/user/service-list">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/user/review">
            <UserReview></UserReview>
          </PrivateRoute>
          <PrivateRoute path="/admin/service-list">
            <AdminRoute>
              <AdminServiceList></AdminServiceList>
            </AdminRoute>
          </PrivateRoute>
          <PrivateRoute path="/admin/add-service">
            <AdminRoute>
              <AdminAddService></AdminAddService>
            </AdminRoute>
          </PrivateRoute>
          <PrivateRoute path="/admin/add-admin">
            <AdminRoute>
              <AddAdmin></AddAdmin>
            </AdminRoute>
          </PrivateRoute>
          <Route path="/not-admin">
            <NotAdmin></NotAdmin>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
