import './Header.scss';
// import Addads from '../AddAnonnce/Addads';
// import Index from '../Index/Index';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    NavLink
  } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="overlay"></div>
                <div className="container">
                    <nav>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="logo">
                                    <h1>DIRECTORYADS</h1>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <Router>
                                    <div className="menu">
                                        <ul>
                                            <li><NavLink exact to="/"> Home </NavLink> </li>
                                            <li> <NavLink to="/annonce">Annoce</NavLink> </li>
                                            {/* <li> <a href="/getdata">get</a> </li> */}
                                            {/* <li><a href="/"> Home </a> </li>
                                            <li> <a href="/annonce">Annoce</a> </li> */}
                                            <li>log in</li>
                                            <li>Register</li>
                                        </ul>
                                    </div>
                                </Router>
                            </div>
                        </div>
                    </nav>
                    <div className="Slogan">
                        <h4>Welcome To DirectoryAds</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header