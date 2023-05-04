import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/myPortfolio/Home';
import Blog from './components/blog/Blog';
import { useEffect } from 'react';
import AdminPanel from './components/blog/adminpanel/AdminPanel';
import BlogList from './components/blog/adminpanel/pages/BlogList'
import BlogAdd from './components/blog/adminpanel/pages/BlogAdd'
import Command from './components/blog/adminpanel/pages/Command'
import UpdateBlog from './components/blog/adminpanel/UpdateBlog';
import Login from './components/blog/adminpanel/Login';


function App() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  
  var cook = checkCookie("username");
  if(cook){
    setInterval(()=>{
      cook = checkCookie("username")
      if(cook==false){
        window.location.href="/admin"
      }
    },60 * 60 * 1000)
  }
  const ele = cook ? <AdminPanel/> : <Login/>


  return (
   
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/postlist' element={<Blog />} />
          <Route path='/admin' element={ele} >
          <Route path='/admin/bloglist' element={<BlogList />} />
          <Route path='/admin/blogadd' element={<BlogAdd />} />
          <Route path='/admin/command' element={<Command />} />
          <Route path='/admin/updateblog/:id' element={<UpdateBlog />} />
          </Route>         
         
        </Routes>
    </>
  );
}

export default App;
