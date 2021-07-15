import { useHistory } from 'react-router'
import './header.css'
import { AuthContext } from '../../context/authContext';
import { useContext, useEffect, useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
import SearchBox from '../search-box/search-box';


function Header(){

    const authContext = useContext(AuthContext);
    const [isAuth, setIsauth] = useState(false)
    const [active, setActive]=useState('nav1')
    let history =useHistory();
    function logout(){
    
        authContext.setAuth({})
        localStorage.removeItem('token');
        history.push('/')
        window.location.reload(false);
       
    }

    const addActiveClass = (e) => {
        const click = e.target.id
        console.log(click);
        if(!active===click)
        { setActive('') }
        else
        {
            setActive(click)
        }
        console.log(active);
    }

  

   return(
        <nav className="navb ">
  <div className="container-nav">
    
    { authContext.auth.token? (
        <>
                       <div className='search-b'>
                           <h1 className="navbar-brand mb-0 h1">ORENDA</h1>
                           
                       </div>
                       <div className='search-nav'>
                           <SearchBox/>
                        </div>
                        <div className="topnav">
                        <Link className={`link-to-active ${active === "nav1"? 'clicked': ''}`}  to="/" id='nav1' onClick={e=>addActiveClass(e)}>Cards</Link>
                       
                        <Link className={`link-to-active ${active === "nav2"? 'clicked': ''}`} to="/" id='nav2' onClick={e=>addActiveClass(e)}>Home</Link>
                       <Link className={`link-to-active ${active === "nav3"? 'clicked': ''}`}  to="/ProfileView" id='nav3' onClick={e=>addActiveClass(e)}>Profile</Link>
                       <img src={'http://localhost:5000'+ authContext.user.picture} className="avatar-user2"  to="/"  onClick={()=>logout()}/>
                   </div>
        </>           
               ) : (
                       <div className="container-nav">
                           <h1 className="navbar-brand mb-0 h1">ORENDA</h1>
                   <a className='link' href='/'>you need to login</a></div>)}
  </div>
</nav>)
}
export default Header