import React from 'react';
import Navbar from './components/navbar';
import MainPage from './components/mainPage';
import Footer from './components/footer';
import Category from './components/category';
import Search from './components/search';
import TopHeadline from './components/topHeadline';
import Countries from './components/countries';
import ContactUs from './components/contact_us';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";


const App = () => {

  return (
    <div className="app">
          <Navbar />
              <Switch>
                    <Route exact path="/">
                          <MainPage />
                          <TopHeadline />
                          <ContactUs />
                    </Route>
                    <Route exact path="/categories">
                       <Category /> 
                    </Route>
                    <Route exact path="/countries">
                       <Countries /> 
                    </Route>
                    <Route exact path="/search">
                        <Search />
                    </Route>
              </Switch>
      <Footer />
    </div>
  );

}

export default App;
