import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import MyOrder from './components/pages/MyOrder';
import AboutUs from './components/pages/AboutUs';
import PlanMyKitchen from './components/pages/PlanMyKitchen';
import Shop from './components/pages/Shop';
import FrequenlyAskedQuestions from './components/pages/FrequenlyAskedQuestions'
import ViewMore from './components/pages/ViewMore'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/plan-my-kitchen' component={PlanMyKitchen} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/my-order' component={MyOrder} />
          <Route path='/frequenly-asked-questions' component={FrequenlyAskedQuestions} />
          <Route path='/view-more' component={ViewMore} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
