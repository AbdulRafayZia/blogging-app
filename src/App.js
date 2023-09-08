
import './App.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar'
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Setting from './pages/setting/Setting';
import Login from './pages/login/Login';
import Regiter from './pages/Register/Register';
import { BrowserRouter } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  Router,
} from "react-router-dom";
import Post from './components/post/Post';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
  const user= true;
  return (
  //   <Router>
  //   <Topbar/>
  //   <switch>
  //     <Route exact path="/">
  //       <Home/>
  //     </Route>
  //     <Route path="/register">
  //       {user ? <Home/>:<Regiter/>}
  //     </Route>
  //     <Route path="/login">
  //       <Login/>
  //     </Route>
  //     <Route path="/write">
  //       <Write/>
  //     </Route>
  //     <Route path="/setting">
  //       <Setting/>
  //     </Route>
  //     <Route path="/post/:postId">
  //       <Single/>
  //     </Route>
  //   </switch>
  //  <Login/>
  //   </Router>
 
  <BrowserRouter basename="/">
     <Topbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
  </Routes>
  <Routes>
    <Route path="/register" element={<Regiter/>} />
  </Routes>
  <Routes>
    <Route path="/login" element={ <Login/>} />
  </Routes>
  <Routes>
    <Route path="/write" element={<Write/>} />
  </Routes>
  <Routes>
    <Route path="/setting" element={<Setting/>} />
  </Routes>
  <Routes>
    <Route path="/post/:postIdng" element={<Single/>} />
  </Routes>
  

</BrowserRouter>
  )
}

export default App;
