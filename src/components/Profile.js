import React from 'react'
import './profile.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Profile() {
    return (
        <Router>
        <div id="container">

                <header>
                    <div className="quoteoftheday">Profile</div>
                    <div className="name">Waqas.</div>
                </header>

                <article>

                    <div className="quote">
                        <h1>A Coders Life: Problematic but Charismatic.</h1>
                    </div>

                    <div className="quoteby">
                        <h4>Waqas Khan</h4>
                    </div>

                </article>

                <footer>

                    <div className="skills">
                        <h6>Menu</h6>
                        <ul>
                            <li><Link to='/'>Introduction</Link></li>
                            <li><Link to='/education'>Education</Link> </li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/pro-experience'>Professional Experience</Link></li>
                        </ul>
                    </div>

                     <Switch>
                         <Route exact path="/">
                            <div className="content">
                                <p>Waqas Khan a professional Front-End  developer having with an year of experience in Graphics Designing.
                                    Looking forward to persue my career as a Full Stack | MERN developer and to start my own company.
                                </p>
                            </div>
                        </Route>
                        <Route exact path="/education">
                            <div className="content">
                                <p>BS Software Engineering, Institue of Management Sciences,Peshawar</p><br/>
                                <p>Fsc Pre-Engineeting, Edwardes College.</p><br/>
                                <p>Matriculation, Forward Model School and College,Peshawar</p>
                            </div>
                        </Route>
                        <Route exact path="/contact">
                            <div className="content">
                                <ul>
                                    <li className="social"><a href="https://www.linkedin.com/in/waqaskhan5570/" target="_blank">Linkedin</a></li>
                                    <li className="social"><a href="https://www.facebook.com/profile.php?id=100006496629127" target="_blank">Facebook</a></li>
                                    <li className="social"><a href="https://www.instagram.com/waqaskhan5570/?fbclid=IwAR3eLafW8eCMv4zysVGtwM5Y6e1ja4xJBCLZGBwCwpVFDcc4P7y25eeZ5sY" target="_blank">Instagram</a></li>
                                    <li className="social"><a href="https://twitter.com/waqaskhan55701" target="_blank">Twitter</a></li>

                                </ul>
                            </div>
                        </Route>
                        <Route exact path="/pro-experience">
                            <div className="content">
                               <p><em>Graphics Designer</em>  : Tournelize.com</p>
                               <p><em>Front-End Developer</em> : InternsPk</p>
                            </div>
                        </Route>
                       
                    </Switch>   

                    

                </footer>
            </div>
            </Router>
    )
}

export default Profile;
