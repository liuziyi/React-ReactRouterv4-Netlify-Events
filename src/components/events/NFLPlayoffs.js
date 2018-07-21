import React from "react";
import Conferences from "../../images/nfl/conferences.png";
import Bracket1 from "../../images/nfl/bracket1.jpg";
import Bracket2 from "../../images/nfl/bracket2.dms";

const NFLPlayoffs = () => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">NFL Playoffs</h1>
        <p className="lead">American Football</p>
    </div>
    <div style={{ paddingTop: '20px', paddingLeft: '100px', paddingRight: '100px' }}>
      <h2 style={{ paddingBottom: '20px' }}>Competition Format</h2>
      <p>
        <i className="fas fa-angle-right"></i> NFL consists of 32 teams divided into 2 conferences,
        American Football Conference (AFC) and National Football Conference (NFC), each with 16 teams.<br/>
      </p>
      <p>
        <i className="fas fa-angle-right"></i> Conferences <br/>
          <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> Each conference is further divided into 4 divisions.
          Each division contains 4 teams for a grand total of 32 teams.  <br/>
          <img style={{ paddingTop: '50px', paddingBottom: '40px' }} src={Conferences} width="400" height="300"/> <br/>
          <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> The winner of each division is guaranteed a playoff spot.
          In addition, there are two “Wild Card” spots per Conference that go to the two teams with the best records that did not win their respective
          divisions (four total wild card spots).<br/>
          <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> For each conference, there are six playoff teams: the winner of
          each division, plus two wild card spots. See sample playoff bracket from last year (2016) below: <br/>
          <img style={{ paddingTop: '50px', paddingBottom: '40px' }} src={Bracket1} width="400" height="300"/> <br/>
          <i style={{ paddingLeft: '20px' }} className="fas fa-angle-double-right"></i> The “Wild Card” teams in this graphic are the 5- and 6-seeded teams
          on each side. The 1-seeded teams have home-field advantage guaranteed. The 1- and 2-seeded teams on each side have a bye week for the first round.<br/>
          <img style={{ paddingTop: '50px', paddingBottom: '40px' }} src={Bracket2} width="500" height="400"/> <br/>
      </p>

      <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Source</h2>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://en.wikipedia.org/wiki/NFL_playoffs">
          NFL playoffs
        </a>
      </p>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.quora.com/How-are-the-NFL-playoffs-determined">
          How are the NFL playoffs determined?
        </a>
      </p>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.thoughtco.com/how-the-nfl-is-organized-1335412">
          How the NFL Is Organized
        </a>
      </p>
    </div>
  </div>
);

export default NFLPlayoffs;
