import React from 'react';

const RugbyWorldCup = () => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Rugby World Cup</h1>
      <p className="lead">Rugby</p>
    </div>
    <div style={{ padding: '50px' }}>
      <table className="table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Viewers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2015 England</td>
            <td>1 Billion</td>
          </tr>
          <tr>
            <td>2011 New Zealand</td>
            <td>2.4 Billion</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Source</h2>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.rugbyworldcup.com/news/161402?lang=en">
          Asia leads record Rugby World Cup viewership growth
        </a>
      </p>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.totalsportek.com/news/cricket-world-cup-third-most-watched-sports-event/">
          Cricket World Cup 2015 3rd Most Watched Sports Event In The World
        </a>
      </p>
    </div>
  </div>
);


export default RugbyWorldCup;
