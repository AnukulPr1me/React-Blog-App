
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Post from './components/post/Post';
import Single from './pages/single/Single';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router> 

      <TopBar/>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/register">
          {user ? <Home/> :<Register/>}
        </Route>

        <Route path="/write">
          {user ? <Write/> :<Register/>}
        </Route>
    

        <Route path="/login">
          {user ? <Home/> :<Login/>}
        </Route>

        <Route path="/post/:postId">
          <Single/>
        </Route>

        <Route path="/settings">
          {user ? <Settings/> :<Register/>}
        </Route>
    
    
      
      </Switch>

      
    </Router>
  );
}

export default App;
