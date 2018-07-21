import React from "react";
import Bracket from "../../images/mlb/bracket.dms";

const MLBPlayoffs = () => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">MLB Playoffs</h1>
        <p className="lead">Baseball</p>
    </div>
    <div style={{ paddingTop: '20px', paddingLeft: '100px', paddingRight: '100px' }}>
      <h2 style={{ paddingBottom: '20px' }}>Competition Format</h2>
      <p>
        <i className="fas fa-angle-right"></i> Typically begins the first full week of October. <br/>
        <i className="fas fa-angle-right"></i> Ten teams make the playoffs—five each in the American and National Leagues.<br/>
        <i className="fas fa-angle-right"></i> The winners of the American League Championship Serie s (ALCS) and the 
        National League Championship Series (NLCS) play each other in the best-of-seven World Series.<br/>
        <img style={{ paddingTop: '50px', paddingBottom: '40px' }} src={Bracket} width="500" height="400"/> <br/>
      </p>
      <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Source</h2>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.thoughtco.com/how-mlb-playoffs-work-321331">
          How the MLB Playoffs Work
        </a>
      </p>
    </div>
  </div>
);


export default MLBPlayoffs;
