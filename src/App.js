import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Events from './components/Events';
import FIFA from './components/events/FIFA';
import Olympics from './components/events/Olympics';
import CricketWorldCup from './components/events/CricketWorldCup';
import RugbyWorldCup from './components/events/RugbyWorldCup';
import F1WorldChampionship from './components/events/F1WorldChampionship';
import EPL from './components/events/EPL';
import NBAPlayoffs from './components/events/NBAPlayoffs';
import Majors from './components/events/Majors';
import TennisGrandSlams from './components/events/TennisGrandSlams';
import TourDeFrance from './components/events/TourDeFrance';
import NFLPlayoffs from './components/events/NFLPlayoffs';
import MLBPlayoffs from './components/events/MLBPlayoffs';
import Users from './components/api/Users';
import UserDetails from './components/api/UserDetails';
import Categories from './components/Categories';
import Countries from './components/Countries';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/events" component={Events} exact/>
            <Route path="/events/fifa" component={FIFA}/>
            <Route path="/events/olympics" component={Olympics}/>
            <Route path="/events/cricket" component={CricketWorldCup}/>
            <Route path="/events/rugby" component={RugbyWorldCup}/>
            <Route path="/events/f1" component={F1WorldChampionship}/>
            <Route path="/events/epl" component={EPL}/>
            <Route path="/events/nba" component={NBAPlayoffs}/>
            <Route path="/events/majors" component={Majors}/>
            <Route path="/events/tennis" component={TennisGrandSlams}/>
            <Route path="/events/tdf" component={TourDeFrance}/>
            <Route path="/events/nfl" component={NFLPlayoffs}/>
            <Route path="/events/mlb" component={MLBPlayoffs}/>
            <Route path="/users" component={Users} exact/>
            <Route path="/users/:id" component={UserDetails} />
            <Route path="/categories" component={Categories} exact/>
            <Route path="/countries" component={Countries}/>
            <Route component={Error}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
