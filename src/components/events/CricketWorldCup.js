import React from 'react';

const CricketWorldCup = () => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Cricket World Cup</h1>
      <p className="lead">Cricket</p>
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
            <td>2015 Melbourne</td>
            <td>1 Billion</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Source</h2>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="http://www.skysports.com/cricket/ICC-World-Cup/news/20127/9780888/2015-cricket-world-cup-the-most-popular-in-the-tournaments-history">
          2015 Cricket World Cup the most popular in the tournaments history
        </a>
      </p>
    </div>
  </div>

);


export default CricketWorldCup;
