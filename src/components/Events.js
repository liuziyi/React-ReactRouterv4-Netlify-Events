import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Olympics from "../images/logos/olympics.png";
import FIFA from "../images/logos/fifa.png";
import Cricket from "../images/logos/cricket.png";
import Rugby from "../images/logos/rugby.png";
import F1 from "../images/logos/f1.png";
import EPL from "../images/logos/epl.png";
import NBA from "../images/logos/nba.png";
import Majors from "../images/logos/majors.jpg";
import GrandSlams from "../images/logos/gs.jpg";
import TourDeFrance from "../images/logos/tdf.png";
import NFL from "../images/logos/nfl.jpg";
import MLB from "../images/logos/mlb.jpg";

class Events extends Component {

  render(){
    return(
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Events</h1>
        </div>

        <div className="container">

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px' , padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={Olympics} className="card-img-top" width="200" height="80"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">Olympic Games</h5>
              <p className="card-text">Sports</p>
              <Link to="events/olympics" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={FIFA} className="card-img-top" width="200" height="80"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">FIFA World Cup</h5>
              <p className="card-text">Football</p>
              <Link to="events/fifa" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={Cricket} className="card-img-top" width="10" height="100"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">Cricket World Cup</h5>
              <p className="card-text">Cricket</p>
              <Link to="events/cricket" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={Rugby} className="card-img-top" width="200" height="150"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">Rugby World Cup</h5>
              <p className="card-text">Rugby</p>
              <Link to="events/rugby" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <hr/>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={F1} className="card-img-top" width="200" height="80"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">Formula 1 World Championship</h5>
              <p className="card-text">Auto Racing</p>
              <Link to="events/f1" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={EPL} className="card-img-top" width="200" height="100"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">English Premier League</h5>
              <p className="card-text">Football</p>
              <Link to="events/epl" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={NBA} className="card-img-top" width="200" height="150"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">NBA Playoffs</h5>
              <p className="card-text">Basketball</p>
              <Link to="events/nba" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={Majors} className="card-img-top" width="200" height="150"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">The Majors</h5>
              <p className="card-text">Golf</p>
              <Link to="events/majors" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={GrandSlams} className="card-img-top" width="200" height="150"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">Tennis Grand Slams</h5>
              <p className="card-text">Tennis</p>
              <Link to="events/tennis" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={TourDeFrance} className="card-img-top" width="200" height="150"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">Tour de France</h5>
              <p className="card-text">Cycling</p>
              <Link to="events/tdf" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={NFL} className="card-img-top" width="200" height="150"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">NFL Playoffs</h5>
              <p className="card-text">American Football</p>
              <Link to="events/nfl" className="btn btn-dark">Details</Link>
            </div>
          </div>

          <div className="row" style={{ border: '1px solid #D3D3D3', borderRadius: '5px', padding: '20px 10px', marginBottom: '10px' }}>
            <div className="col-2">
              <img src={MLB} className="card-img-top" width="200" height="150"/>
            </div>
            <div className="col-8">
              <h5 className="card-title">MLB Playoffs</h5>
              <p className="card-text">Baseball</p>
              <Link to="events/mlb" className="btn btn-dark">Details</Link>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Events;
