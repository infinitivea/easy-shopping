import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Shopping from "./pages/Shopping";
import Layout from "./components/Layout";
import UserContext from "./contexts/UserContext";

function App() {
  const [isAuth, setIsAuth] = useState(null);
  return (
    <UserContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/shopping" component={Shopping} />
            <Route path="/cart" component={Cart} />
            <Redirect to="/home" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
