
import React from "react";
import Login from "./components/Login";
//import Login from "../../project/src/components/Topbar/Pages/Home/Login/Login";
//import Bottom from "./components/Bottom";
import Navbar from "./components/Navbar";
import Wallpaper from "./components/Wallpaper";
import { BrowserRouter,Route,Switch,Link } from "react-router-dom";

function App() {
  return (
 <>
 <BrowserRouter>
 <Switch>
  <Route exact path='/'>
  <Navbar/>
 <Wallpaper/>
  </Route>
  <Route path='/login'>
    <Login/>
  </Route>
 </Switch>
 </BrowserRouter>
 
 
 </>
  );
}

export default App;
