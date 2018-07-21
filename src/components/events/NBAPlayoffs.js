import React from "react";
import Bracket from "../../images/nba/bracket.gif";

const NBAPlayoffs = () => (
    <div>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">NBA Playoffs</h1>
          <p className="lead">Basketball</p>
      </div>
      <div style={{ paddingLeft: '250px' }}>
        <img src={Bracket} width="800" height="500"/>
        <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Competition Format</h2>
        <p>
          <i className="fas fa-angle-right"></i> Each conference is split into six-team divisions <br/>
            <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> Eastern Conference: The Atlantic, Central, and Southeast divisions <br/>
            <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> Western Conference: The Northwest, Southwest, and Pacific
        </p>
        <p>
          <i className="fas fa-angle-right"></i> The top eight teams in the NBAs Eastern and Western Conferences,
          based on regular-season record, qualify for the playoffs. The teams are seeded one through eight.
          In the first round, the top seed plays the eighth seed, two plays seven, three plays six and four plays five.
        </p>
        <p>
          <i className="fas fa-angle-right"></i> Teams are not re-seeded after each round. The winner of the
          one/eight series plays the winner of four/five, and the winner of two/seven plays the three/sixwinner.
        </p>
        <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Source</h2>
        <p>
          <i className="fas fa-angle-right"></i> https://www.pinterest.com/pin/330170216423244805/
        </p>
        <p>
          <i className="fas fa-angle-right"></i> https://www.thoughtco.com/about-the-nba-playoffs-326009
        </p>
      </div>
    </div>
);


export default NBAPlayoffs;
