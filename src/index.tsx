import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './store';

import SiteFooter from './components/organisms/SiteFooter';
import SiteHeader from './components/organisms/SiteHeader';

import './assets/styles/index.scss';
import Home from './pages/Home';
import Resume from './pages/Resume';
import CaseStudy from './components/templates/CaseStudy';
import Error404 from './pages/404';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';

const vh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
window.addEventListener('load resize', vh);
window.addEventListener('resize', vh);

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Router>
        <SiteHeader></SiteHeader>
        <Switch>
          <Route exact strict path='/'>
            <Home />
          </Route>
          <Route exact path='/projects'>
            <CaseStudies />
          </Route>
          <Route path='/project/:slug'>
            <CaseStudy />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/'>
            <Error404 />
          </Route>
        </Switch>
        <SiteFooter></SiteFooter>
      </Router>
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
